import { readAs } from './readAs.js'
export async function readAs_ArrayBuffer(file:File):Promise<void> {
	return await readAs(file, 'ArrayBuffer') as void
}
export {
	readAs_ArrayBuffer as readAsArrayBuffer,
}
