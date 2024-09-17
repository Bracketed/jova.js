import { readFile, writeFile } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Resolve the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const markdownFilePath = join(__dirname, 'wiki', '_Sidebar.md');

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

readFile(markdownFilePath, 'utf8', (err, data) => {
	if (err) return console.error('Error reading the file:', err);

	let updatedContent = data.replace(/###/g, '##');

	updatedContent = updatedContent.replace(/- \[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
		const capitalizedText = capitalizeFirstLetter(p1);
		return `- [${capitalizedText}](${p2})`;
	});

	writeFile(markdownFilePath, updatedContent, 'utf8', (err) => {
		if (err) return console.error('Error writing the file:', err);
		console.log('Markdown file updated successfully!');
	});
});
