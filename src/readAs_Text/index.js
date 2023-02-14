import { readAs } from '../readAs/index.js'
/**
 * @param file{File}
 * @returns {Promise<string>}
 */
export async function readAs_Text(file) {
	return await readAs(file, 'Text')
}
export { readAs_Text as readAsText, }
