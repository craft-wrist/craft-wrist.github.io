'use client';

import { useState } from 'react';
import VideoPlayer from '@/app/components/VideoPlayer';
import type { TaskVideo } from '@/app/content';

export default function DemoExplorer({ tasks }: { tasks: TaskVideo[] }) {
  const [activeId, setActiveId] = useState(tasks[0]?.id ?? '');
  const active = tasks.find((task) => task.id === activeId) ?? tasks[0];
  if (!active) return null;

  return (
    <div className="demo-explorer">
      <div className="demo-tabs" role="tablist" aria-label="Task demonstrations">
        {tasks.map((task) => (
          <button key={task.id} type="button" role="tab" aria-selected={active.id === task.id} className={active.id === task.id ? 'active' : ''} onClick={() => setActiveId(task.id)}>
            <span>{task.index}</span><strong>{task.label}</strong><i aria-hidden="true">↗</i>
          </button>
        ))}
      </div>
      <div className="demo-stage">
        <div className="demo-stage-media"><VideoPlayer key={active.id} src={active.src} poster={active.poster} label={`${active.label} demonstration video`} /></div>
        <div className="demo-stage-copy">
          <p className="stage-kicker">Task {active.index} / local correction</p>
          <h3>{active.label}</h3>
          <p>{active.wristRole}</p>
          <div className="stage-split"><span>Arm supplies</span><strong>gross motion</strong><span>CRAFT-W supplies</span><strong>local orientation</strong></div>
        </div>
      </div>
    </div>
  );
}
