export const site = {
  name: 'Sam Maosa',
  handle: 'coolsam726',
  title: 'Sam Maosa — Ecosystem builder & full-stack craftsman',
  description:
    'Sam Maosa builds developer ecosystems across AdonisJS, FilamentPHP, Odoo, and JetBrains — open source with consulting depth.',
  location: 'Kenya',
  companies: ['SavannaBits', 'Strathmore University'],
  languages: ['PHP', 'TypeScript', 'JavaScript', 'Python', 'Kotlin', 'Java', 'C', 'Node.js'],
  links: {
    github: 'https://github.com/coolsam726',
    twitter: 'https://x.com/coolsam726',
    blog: 'https://savannabits.com',
    email: 'mailto:sam@savannabits.com',
  },
} as const;

export type Ecosystem = {
  name: string;
  tag: string;
  summary: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const ecosystems: Ecosystem[] = [
  {
    name: 'Shamar',
    tag: 'AdonisJS admin framework',
    summary:
      'A Filament-inspired admin framework for AdonisJS — resources, forms, and panels with a modern TypeScript core.',
    href: 'https://shamar.dev',
    secondaryHref: 'https://github.com/coolsam726/shamar',
    secondaryLabel: 'GitHub',
  },
  {
    name: 'Almasix',
    tag: 'Platform & HRM',
    summary:
      'People operations and platform work on Almasix and Orbit — HR systems built for real organizational workflows.',
    href: 'https://github.com/coolsam726/almasix-hrm',
  },
  {
    name: 'FilamentPHP plugins',
    tag: 'Laravel ecosystem',
    summary:
      'Production plugins for Filament: modular architecture, Flatpickr date picking, nested comments, and more.',
    href: 'https://filamentphp.com/plugins/coolsam-modules',
    secondaryHref: 'https://github.com/coolsam726?tab=repositories&q=filament',
    secondaryLabel: 'Repos',
  },
  {
    name: 'Adonis Idea',
    tag: 'JetBrains / WebStorm',
    summary:
      'A JetBrains plugin for AdonisJS with optional Shamar support — tooling that meets the framework where you write it.',
    href: 'https://github.com/coolsam726/adonisjs-jetbrains-plugin',
  },
  {
    name: 'Odoo addons',
    tag: 'ERP & payments',
    summary:
      'Custom Odoo modules spanning M-Pesa Daraja, e-wallets, POS, and university-grade HR and payments.',
    href: 'https://github.com/coolsam726/coolsam-odoo-addons',
    secondaryHref: 'https://github.com/coolsam726/odoo-addon-pos-mpesa-daraja',
    secondaryLabel: 'M-Pesa POS',
  },
  {
    name: 'PyVELM',
    tag: 'Python ERP experiment',
    summary:
      'A declarative Python ERP on PostgreSQL — recordsets and modules in the Odoo tradition, with a bespoke HTMX UI.',
    href: 'https://coolsam726.github.io/pyvelm/',
    secondaryHref: 'https://github.com/coolsam726/pyvelm',
    secondaryLabel: 'GitHub',
  },
];

export type OpenSourceProject = {
  name: string;
  description: string;
  href: string;
  stars?: number;
  stack: string;
};

export const openSource: OpenSourceProject[] = [
  {
    name: 'filament-modules',
    description: 'Filament + nWidart modules — independent Filament files per Laravel module.',
    href: 'https://github.com/coolsam726/filament-modules',
    stars: 210,
    stack: 'PHP · Filament',
  },
  {
    name: 'jetstream-inertia-generator',
    description: 'Laravel admin CRUD generator with Jetstream, Inertia, Vue 3, and Tailwind.',
    href: 'https://github.com/coolsam726/jetstream-inertia-generator',
    stars: 122,
    stack: 'PHP · Vue',
  },
  {
    name: 'flatpickr',
    description: 'Extend Filament date picking with Flatpickr.',
    href: 'https://github.com/coolsam726/flatpickr',
    stars: 102,
    stack: 'PHP · Filament',
  },
  {
    name: 'nested-comments',
    description: 'Nested-set comments and replies for Filament forms, pages, and resources.',
    href: 'https://github.com/coolsam726/nested-comments',
    stars: 31,
    stack: 'PHP · Filament',
  },
  {
    name: 'shamar',
    description: 'Filament-inspired admin framework for AdonisJS.',
    href: 'https://github.com/coolsam726/shamar',
    stack: 'TypeScript · AdonisJS',
  },
  {
    name: 'adonisjs-jetbrains-plugin',
    description: 'WebStorm plugin for AdonisJS with optional Shamar support.',
    href: 'https://github.com/coolsam726/adonisjs-jetbrains-plugin',
    stack: 'Kotlin · JetBrains',
  },
];
