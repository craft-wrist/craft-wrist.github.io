'use client';

import { useState } from 'react';
import VideoPlayer from '@/app/components/VideoPlayer';
import type { TaskVideo } from '@/app/content';

export default function DemoExplorer({ tasks }: { tasks: TaskVideo[] }) {
  const [activeId, setActiveId] = useState(tasks[0]?.id ?? '');
  const active = tasks.find((task) => task.id === activeId) ?? tasks[0];
  if (!active) return null;

  const move = (offset: number) => {
    const currentIndex = tasks.findIndex((task) => task.id === active.id);
    const nextIndex = (currentIndex + offset + tasks.length) % tasks.length;
    setActiveId(tasks[nextIndex].id);
    window.requestAnimationFrame(() => document.getElementById(`demo-tab-${tasks[nextIndex].id}`)?.focus());
  };

  return (
    <div className="demo-explorer">
      <div className="demo-tabs" role="tablist" aria-label="Task demonstrations">
        {tasks.map((task) => (
          <button id={`demo-tab-${task.id}`} key={task.id} type="button" role="tab" aria-controls={`demo-panel-${task.id}`} aria-selected={active.id === task.id} tabIndex={active.id === task.id ? 0 : -1} className={active.id === task.id ? 'active' : ''} onClick={() => setActiveId(task.id)} onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); move(-1); } }}>
            <span>{task.index}</span><strong>{task.label}</strong><i aria-hidden="true">↗</i>
          </button>
        ))}
      </div>
      <div className="demo-stage" id={`demo-panel-${active.id}`} role="tabpanel" aria-labelledby={`demo-tab-${active.id}`} tabIndex={0}>
        <div className="demo-stage-media"><VideoPlayer key={active.id} src={active.src} poster={active.poster} playbackRate={1.5} label={`${active.label} demonstration video`} /></div>
        <div className="demo-stage-copy">
          {/* <p className="stage-kicker">Task {active.index} / local correction</p> */}
          <h3>{active.label}</h3>
          <p>{active.wristRole}</p>
          <div className="stage-split"><span>Arm supplies</span><strong>gross motion</strong><span>CRAFT-W supplies</span><strong>local orientation</strong></div>
        </div>
      </div>
    </div>
  );
}
