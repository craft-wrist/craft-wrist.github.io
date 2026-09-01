export type ResourceStatus = 'available' | 'coming-soon';

export interface Resource {
  id: string;
  index: string;
  label: string;
  description: string;
  status: ResourceStatus;
  href?: string;
  external?: boolean;
}

export const resources: Resource[] = [
  {
    id: 'paper',
    index: '01',
    label: 'Paper',
    description: 'arXiv preprint · manuscript in preparation',
    status: 'coming-soon',
  },
  {
    id: 'assembly',
    index: '02',
    label: 'Assembly guide',
    description: 'Documentation and assembly video',
    status: 'coming-soon',
  },
  {
    id: 'bom',
    index: '03',
    label: 'Bill of materials',
    description: 'Parts list and sourcing',
    status: 'available',
    href: 'https://docs.google.com/spreadsheets/d/1fitplWpsL6kj0DHfCh3jbNVrBhKQ1Oqo/edit?usp=sharing&ouid=113564166501064431161&rtpof=true&sd=true',
    external: true,
  },
  {
    id: 'print-files',
    index: '04',
    label: 'Print files',
    description: '3D-printable part files',
    status: 'coming-soon',
  },
  {
    id: 'control-api',
    index: '05',
    label: 'Control API',
    description: 'Firmware and control code',
    status: 'coming-soon',
  },
  {
    id: 'solidworks',
    index: '06',
    label: 'SolidWorks',
    description: 'CAD model source files',
    status: 'available',
    href: 'https://github.com/craft-wrist/craft-wrist-cad-file',
    external: true,
  },
];

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'overview', label: 'Why it matters' },
  { id: 'demonstrations', label: 'Demonstrations' },
  { id: 'design', label: 'Mechanism' },
  { id: 'coupling', label: 'Coupling' },
  { id: 'resources', label: 'Resources' },
  { id: 'cite', label: 'Cite' },
];

export interface HeroAction {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export const heroActions: HeroAction[] = [
  { id: 'video', label: 'Video', href: '#overview' },
  { id: 'demo', label: 'Demo', href: '#demonstrations' },
  {
    id: 'cad',
    label: 'CAD',
    href: 'https://github.com/craft-wrist/craft-wrist-cad-file',
    external: true,
  },
  {
    id: 'bom',
    label: 'BOM',
    href: 'https://docs.google.com/spreadsheets/d/1fitplWpsL6kj0DHfCh3jbNVrBhKQ1Oqo/edit?usp=sharing&ouid=113564166501064431161&rtpof=true&sd=true',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/craft-wrist',
    external: true,
  },
];

export interface TaskVideo {
  id: string;
  index: string;
  label: string;
  wristRole: string;
  src: string;
  poster: string;
  posterWidth: number;
  posterHeight: number;
}

export const taskVideos: TaskVideo[] = [
  {
    id: 'hammer',
    index: '01',
    label: 'Nail hammering',
    wristRole:
      'Aligns the hammer head with the nail axis before impact and restores alignment between strokes while the arm drives the strike.',
    src: '/media/demo-Hammer.mp4',
    poster: '/media/demo-Hammer-poster.jpg',
    posterWidth: 406,
    posterHeight: 720,
  },
  {
    id: 'wiping',
    index: '02',
    label: 'Blackboard wiping',
    wristRole:
      'Holds the eraser against the board and regulates the contact angle while the arm supplies the wiping motion.',
    src: '/media/demo-Wiping.mp4',
    poster: '/media/demo-Wiping-poster.jpg',
    posterWidth: 406,
    posterHeight: 720,
  },
  {
    id: 'wrench-pick',
    index: '03',
    label: 'Grasp and reorient',
    wristRole:
      'Aligns the hand to the object before closing the fingers, then corrects orientation locally without repositioning the whole arm.',
    src: '/media/demo-Wrench-Pick.mp4',
    poster: '/media/demo-Wrench-Pick-poster.jpg',
    posterWidth: 406,
    posterHeight: 720,
  },
];

export interface Spec {
  label: string;
  value: string;
}

export const specs: Spec[] = [
  { label: 'Degrees of freedom', value: '2' },
  { label: 'Actuation', value: 'Direct drive' },
  { label: 'Bending range', value: '±20°' },
  { label: 'Axial rotation', value: '−18° to +80°' },
  { label: 'Actuators', value: '2 × XC430-T240BB' },
  { label: 'Interface', value: 'CRAFT Hand compatible' },
  { label: 'Control', value: 'Position / current-limited' },
];

export const bibtex = `@misc{pang2026craftw,
  title = {CRAFT-W: A Direct-drive
           Two-DoF Wrist Extension for
           the CRAFT Hand},
  author = {Pang, Yujie and
            Sakib, Sadman and Al Faruque,
            Mohammad Abdullah},
  year = {2026},
  howpublished = {Manuscript in preparation}
}`;
