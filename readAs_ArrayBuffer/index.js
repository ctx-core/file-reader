import { readAs } from '../readAs/index.js'
/**
 * @param {File}file
 * @returns {Promise<ArrayBuffer>}
 */
export async function readAs_ArrayBuffer(file) {
	return await readAs(file, 'ArrayBuffer')
}
export { readAs_ArrayBuffer as readAsArrayBuffer, }
