'use client';

import { useState } from 'react';

function fallbackCopy(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch {
    // Clipboard write failed; the live region below still reports the attempt.
  }
  document.body.removeChild(textarea);
}

export default function BibTeXCopy({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(bibtex);
      } else {
        fallbackCopy(bibtex);
      }
    } catch {
      fallbackCopy(bibtex);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bibtex-copy">
      <button type="button" onClick={copy}>
        {copied ? 'Copied' : 'Copy BibTeX'}
      </button>
      <span aria-live="polite" role="status">
        {copied ? 'BibTeX copied to clipboard.' : ''}
      </span>
    </div>
  );
}
