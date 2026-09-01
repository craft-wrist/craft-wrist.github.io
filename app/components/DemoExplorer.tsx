'use client';

import { useState } from 'react';
import VideoPlayer from '@/app/components/VideoPlayer';
import type { Resource, TaskVideo } from '@/app/content';

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

export function ResourceExplorer({ resources }: { resources: Resource[] }) {
  const firstLive = resources.find((resource) => resource.status === 'available') ?? resources[0];
  const [activeId, setActiveId] = useState(firstLive?.id ?? '');
  const active = resources.find((resource) => resource.id === activeId) ?? firstLive;
  if (!active) return null;

  const isAvailable = active.status === 'available' && active.href;

  return (
    <div className="resource-explorer">
      <div className="resource-list" role="listbox" aria-label="Project resources">
        {resources.map((resource) => {
          const available = resource.status === 'available' && resource.href;
          return (
            <button key={resource.id} type="button" role="option" aria-selected={active.id === resource.id} className={`resource-row ${active.id === resource.id ? 'active' : ''}`} onClick={() => setActiveId(resource.id)}>
              <span className="resource-row-index">{resource.index}</span>
              <span className="resource-row-name">{resource.label}</span>
              <span className={`resource-row-state ${available ? 'live' : ''}`}>{available ? 'Available' : 'Preparing'}</span>
              <span className="resource-row-arrow" aria-hidden="true">↗</span>
            </button>
          );
        })}
      </div>
      <aside className={`resource-detail ${isAvailable ? 'available' : ''}`} aria-live="polite">
        <div className="resource-detail-top"><span className="resource-detail-index">{active.index} / resource</span><span className="resource-detail-state">{isAvailable ? 'Available now' : 'Coming soon'}</span></div>
        <h3>{active.label}</h3>
        <p>{active.description}</p>
        {isAvailable ? (
          <a className="detail-action" href={active.href} target={active.external ? '_blank' : undefined} rel={active.external ? 'noreferrer' : undefined}>Open {active.label}<span aria-hidden="true">↗</span></a>
        ) : (
          <p className="detail-note">This item will activate here when the public release is ready.</p>
        )}
      </aside>
    </div>
  );
}
