import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Logo from '@site/static/img/JovaLogo.svg';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import clsx from 'clsx';

import styles from './index.module.css';

function HomepageHeader() {
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				<Logo
					className='logo'
					style={{ width: '70%', height: '30%' }}
				/>
				<p className='hero__subtitle'>A Express.js framework!</p>
				<div className={styles.buttons}>
					<div className='customTabsContainer'>
						<Tabs className='tabsContainer'>
							<TabItem
								value='yarn'
								label='Yarn'>
								<CodeBlock
									className='align-left'
									language='bash'
									showLineNumbers>{`yarn add @bracketed/jova.js`}</CodeBlock>
							</TabItem>
							<TabItem
								value='npm'
								label='NPM'>
								<CodeBlock
									className='align-left'
									language='bash'
									showLineNumbers>{`npm install @bracketed/jova.js`}</CodeBlock>
							</TabItem>
							<TabItem
								value='pnpm'
								label='PNPM'>
								<CodeBlock
									className='align-left'
									language='bash'
									showLineNumbers>{`pnpm install @bracketed/jova.js`}</CodeBlock>
							</TabItem>
						</Tabs>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout
			title={`Home`}
			description='The Jova.js Documentation!'>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
