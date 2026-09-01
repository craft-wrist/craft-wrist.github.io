'use client';

import { useEffect, useRef, useState } from 'react';
import { navItems } from '@/app/content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0].id);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-72px 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="CRAFT-W home">
        <span className="brand-mark" aria-hidden="true">CW</span>
        <span>CRAFT-W</span>
      </a>

      <nav aria-label="Primary navigation" className="site-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-toggle-line" aria-hidden="true" />
        <span className="menu-toggle-line" aria-hidden="true" />
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="mobile-menu"
        hidden={!menuOpen}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
