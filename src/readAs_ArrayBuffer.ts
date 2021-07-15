import { readAs } from './readAs.js'
export function readAs_ArrayBuffer(file:File) {
	return readAs(file, 'ArrayBuffer')
}
export {
	readAs_ArrayBuffer as readAsArrayBuffer,
}
