import { readAs } from '../readAs/index.js'
/**
 * @param file{File}
 * @returns {Promise<string>}
 */
export async function readAs_DataURL(file) {
	return await readAs(file, 'DataURL')
}
export { readAs_DataURL as readAsDataURL, }
