import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
	title: 'Jova.js',
	tagline: 'Jova.js Documentation',
	favicon: 'img/JovaIcon.ico',

	// Set the production url of your site here
	url: 'https://bracketed.github.io', //'https://jova.js.org',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/jova.js/',
	trailingSlash: false,
	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				hashed: true,
				language: ['en'],
				docsDir: 'docs',
			},
		],
	],

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'bracketed', // Usually your GitHub org/user name.
	projectName: 'jova.js', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				exclude: [
					'**/node_modules/**',
					'**/*+(index|.test).ts',
					'**/lib/**',
					'**/docs/**',
					'**/{node_modules,test,doc}/**/*',
					'node_modules/**/*',
					'**/node_modules/**/*',
				],
				entryPoints: ['../src/index.ts', '../src/utilities/index.ts', '../src/types/**/*.ts'],
				basePath: '../src',
				name: 'Documentation',
				plugin: ['typedoc-plugin-inline-sources', 'typedoc-plugin-markdown', 'typedoc-plugin-mdn-links'],
				out: './docs/Documentation',
				includeVersion: false,
				excludePrivate: true,
				excludeProtected: true,
				readme: 'none',
				tsconfig: '../tsconfig.json',
				disableSources: false,
				validation: {
					notExported: false,
					invalidLink: false,
					notDocumented: false,
				},
			},
		],
	],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: 'dark', // Default to dark mode
			disableSwitch: true, // Disable the switch for light/dark mode
			respectPrefersColorScheme: false, // Do not follow system preferences
		},
		navbar: {
			title: 'Jova.js Documentation',
			logo: {
				src: 'img/JovaLogoFill.svg',
			},
			items: [
				{ to: '/', label: 'Home', position: 'left' },
				{ to: '/docs/Documentation', label: 'Documentation', position: 'left' },
				{ to: '/docs/Guide', label: 'Guide', position: 'left' },
				{
					href: 'https://github.com/bracketed/jova.js/wiki',
					label: 'GitHub Wiki',
					position: 'left',
				},
				{
					href: 'https://github.com/bracketed/jova.js',
					label: 'GitHub',
					position: 'right',
				},
				{
					href: 'https://www.npmjs.com/package/@bracketed/jova.js',
					label: 'NPM',
					position: 'right',
				},
				{
					href: 'https://x.com/teambracketed',
					label: 'Twitter [X]',
					position: 'right',
				},
				{
					href: 'https://discord.com/invite/JZ4939cvMT',
					label: 'Discord',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Quick Links',
					items: [
						{
							label: 'Home',
							href: '/',
						},
						{
							label: 'Documentation',
							href: '/docs',
						},
						{
							label: 'Package',
							href: 'https://npmjs.com/package/@bracketed/jova.js',
							target: '_blank',
						},
					],
				},
				{
					title: 'Relevant Links',
					items: [
						{
							label: 'Bracketed',
							href: 'https://www.bracketed.co.uk',
							target: '_blank',
						},
						{
							label: 'Status Page',
							href: 'https://status.bracketed.co.uk',
							target: '_blank',
						},
						{
							label: 'Vrfy',
							href: 'https://vrfy.bracketed.co.uk',
							target: '_blank',
						},
					],
				},
				{
					title: 'Social Links',
					items: [
						{
							label: 'Twitter [X]',
							href: 'https://x.com/teambracketed',
							target: '_blank',
						},
						{
							label: 'Github',
							href: 'https://bracketed.co.uk/redirects/github',
							target: '_blank',
						},
						{
							label: 'Discord',
							href: 'https://bracketed.co.uk/redirects/discord',
							target: '_blank',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;

