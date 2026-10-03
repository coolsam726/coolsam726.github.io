export const site = {
  name: 'Sam Maosa',
  handle: 'coolsam726',
  title: 'Sam Maosa — Ecosystem builder & full-stack craftsman',
  description:
    'Sam Maosa builds developer ecosystems, plugins, and end-user software across AdonisJS, FilamentPHP, Almasix, Odoo, and JetBrains — open source with consulting depth.',
  location: 'Kenya',
  avatar: 'https://avatars.githubusercontent.com/u/5610289?v=4',
  companies: ['SavannaBits', 'Strathmore University', 'Almasix'],
  languages: ['PHP', 'TypeScript', 'JavaScript', 'Python', 'Kotlin', 'Java', 'C', 'Node.js'],
  links: {
    github: 'https://github.com/coolsam726',
    twitter: 'https://x.com/coolsam726',
    discord: 'https://discordapp.com/users/coolsam726',
    facebook: 'https://www.facebook.com/coolsam726',
    blog: 'https://savannabits.com',
    email: 'mailto:devmaosa@gmail.com',
  },
  sponsors: [
    {
      label: 'GitHub Sponsors',
      href: 'https://github.com/sponsors/coolsam726',
      hint: 'Recurring support',
    },
    {
      label: 'Ko-fi',
      href: 'https://ko-fi.com/Q5Q81OOIHF',
      hint: 'One-time or monthly',
    },
    {
      label: 'PayPal',
      href: 'https://www.paypal.me/coolsam726',
      hint: 'Direct tip',
    },
  ],
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
    tag: 'Python web framework',
    summary:
      'A full-stack async Python framework on FastAPI and Starlette — Articulate ORM, Prism views, and the Smith CLI. Home of the almasix-dev ecosystem.',
    href: 'https://almasix.com',
    secondaryHref: 'https://github.com/almasix-dev',
    secondaryLabel: 'GitHub org',
  },
  {
    name: 'FilamentPHP plugins',
    tag: 'Laravel ecosystem',
    summary:
      'Flagship plugins: filament-modules for modular Filament apps, and Flatpickr for rich date picking — battle-tested in production Laravel stacks.',
    href: 'https://filamentphp.com/plugins/coolsam-modules',
    secondaryHref: 'https://filamentphp.com/plugins/coolsam-flatpickr',
    secondaryLabel: 'Flatpickr',
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
      'Custom Odoo modules for M-Pesa Daraja, payments, POS, and university workflows — shipped for real organizations.',
    href: 'https://github.com/coolsam726/odoo-addon-payment-mpesa-daraja',
    secondaryHref: 'https://github.com/coolsam726/odoo-payment-paypal-kenya',
    secondaryLabel: 'PayPal Kenya',
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
    name: 'flatpickr',
    description: 'Extend Filament date picking with Flatpickr.',
    href: 'https://github.com/coolsam726/flatpickr',
    stars: 102,
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
