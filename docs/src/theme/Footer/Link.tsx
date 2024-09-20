import LinkedContent from './LinkedContent';

enum TargetLink {
	SELF = '_self',
	PARENT = '_parent',
	NEW_PAGE = '_blank',
	TOP = '_top',
}

interface ExternalLinkParams {
	label: string;
	href: string;
	target?: TargetLink;
}

const ExternalLink = ({ label, href, target = TargetLink.SELF }: ExternalLinkParams) => (
	<a
		href={href}
		target={target}>
		{label}
		<LinkedContent />
	</a>
);

export { ExternalLink, TargetLink };
