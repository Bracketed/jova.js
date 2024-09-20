import { FooterLinkItem, useThemeConfig } from '@docusaurus/theme-common';
import ScalableVectorGraphicLogos from '@site/static/img/TeamBracketedLogoLong.svg';
import { ExternalLink, TargetLink } from './Link';

interface FooterObject {
	title: string | null;
	items: FooterLinkItem[];
}

export default () => {
	const NavigationLinks: Array<FooterObject> = useThemeConfig().footer.links as FooterObject[];

	return (
		<footer
			style={{
				paddingTop: '50px',
				backgroundColor: '#1b1b1d',
				color: 'white',
				textDecoration: 'none',
				textAlign: 'left',
				marginTop: 'auto',
				height: 'auto',
				width: '100%',
				borderTopStyle: 'solid',
				borderTopWidth: '1px',
				borderColor: '#222324',
			}}>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					width: '100%',
				}}>
				<a
					style={{
						width: '15%',
						marginRight: '5%',
						border: 'none',
						color: 'inherit',
						background: 'none',
					}}
					href='https://bracketed.co.uk'>
					<ScalableVectorGraphicLogos
						className='logo'
						style={{ marginTop: '20%' }}
					/>
				</a>
				{NavigationLinks.map((FooterProps: FooterObject, index: number) => (
					<div
						style={{ marginRight: '2%', color: '#e3e3e3' }}
						key={index}>
						<h4 style={{ marginLeft: '40px' }}>{FooterProps.title}</h4>
						<ul>
							{FooterProps.items.map((FooterLink: FooterLinkItem, index: number) => (
								<li
									key={index}
									style={{ listStyleType: 'none' }}>
									<ExternalLink
										label={FooterLink.label}
										href={FooterLink.href}
										target={(FooterLink.target as TargetLink) ?? TargetLink.SELF}
										key={index}
									/>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					color: '#e3e3e3',
					marginTop: '15px',
					paddingBottom: '30px',
					backgroundColor: '#1b1b1d',
					fontFamily: 'FF Neuwelt',
				}}>
				Copyright © {new Date().getFullYear()} [ Bracketed Softworks ], and its partners.
			</div>
		</footer>
	);
};
