import Heading from '@theme/Heading';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

//https://registry.npmjs.org/@bracketed/jova.js
//https://api.github.com/repos/bracketed/jova.js
//https://api.npmjs.org/downloads/range/EXISTANCE:${new Date().toISOString().split('T')[0]}/@bracketed/jova.js

type FeatureItem = {
	title: string;
	description: JSX.Element;
};

function Feature({ title, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center padding-horiz--md align-left'>
				<Heading as='h3'>{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	const [downloads, setDownloads] = useState<string>('N/A');
	const [npmData, setNpmData] = useState<any | undefined>(undefined);
	const [githubData, setGithubData] = useState<any | undefined>(undefined);
	const [contributors, setContributors] = useState<string | number>('N/A');
	const [forks, setForks] = useState<string | number>('N/A');
	const [stars, setStars] = useState<string | number>('N/A');

	useEffect(() => {
		const setDownloadsState = async (npmData: any) => {
			try {
				const response = await axios.get(
					`https://api.npmjs.org/downloads/range/${npmData.time.created}:${
						new Date().toISOString().split('T')[0]
					}/@bracketed/jova.js`
				);
				const downloadsData = response.data.downloads;
				// Assuming downloadsData is an array of download objects with a 'downloads' property
				if (Array.isArray(downloadsData) && downloadsData.length > 0) {
					setDownloads(
						downloadsData
							.reduce((total, item) => total + item.downloads, 0)
							.toString()
					);
				} else {
					setDownloads('N/A');
				}
			} catch {
				setDownloads('N/A');
			}
		};

		const setContributorsState = async (githubData: any) => {
			try {
				const response = await axios.get(githubData.contributors_url);
				setContributors(response.data.length || 'N/A');
			} catch {
				setContributors('N/A');
			}
		};

		axios.get('https://registry.npmjs.org/@bracketed/jova.js')
			.then((d) => {
				setNpmData(d.data);
				setDownloadsState(d.data);
			})
			.catch(() => setNpmData(undefined));

		axios.get('https://api.github.com/repos/bracketed/jova.js')
			.then((d) => {
				setGithubData(d.data);
				setContributorsState(d.data);
				setStars(d.data.stargazers_count);
				setForks(d.data.forks_count);
			})
			.catch(() => setGithubData(undefined));
	}, []);

	const FeatureList: FeatureItem[] = [
		{
			title: 'Easy to Use & Set up',
			description: (
				<>
					Easy to use, easy to set up and easy to deploy! Jova.js allows you to use a
					simple file structure with flexibility on the directories it pulls its
					middlewares, routes and events from!
					<br />
					<br />
					Jova allows you to have a simple but effective setup with pre-set up middlewares
					and optional middlewares to use and enable. The Jova instance allows almost full
					control over Express without having to expose the application directly to be
					modified!
					<br />
					Jova.js has consistent organisation in its handler scripts allowing people to
					easily understand how Jova works from looking at the front-facing code & the
					typedocs included!
				</>
			),
		},
		{
			title: 'Features',
			description: (
				<>
					<li>Automatic Route Finding</li>
					<li>Automatic Event Handler Finding</li>
					<li>Automatic Middleware Finding</li>
					<li>Simple setup</li>
					<li>Flexible Configuration</li>
					<li>Redis ratelimit bucket integration</li>
					<li>Simple structure</li>
					<li>Fully Typed</li>
					<li>(Almost) Fully Documented</li>
					<li>Up-to-date with Express 5</li>
				</>
			),
		},
		{
			title: 'Statistics',
			description: (
				<>
					Version: {npmData ? npmData['dist-tags']?.latest || 'N/A' : 'N/A'}
					<br />
					{downloads} Downloads!
					<br />
					{forks} Forks!
					<br />
					{stars} Stars!
					<br />
					{contributors} Contributors!
				</>
			),
		},
	];

	return (
		<section className={styles.features}>
			<div className='container' style={{ backgroundColor: '#1b1b1d' }}>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

