import { readAs } from './readAs.js'
export async function readAs_ArrayBuffer(file:File):Promise<ArrayBuffer> {
	return await readAs(file, 'ArrayBuffer') as ArrayBuffer
}
export {
	readAs_ArrayBuffer as readAsArrayBuffer,
}
