import { readAs } from './readAs.js'
export async function readAs_DataURL(file:File):Promise<void> {
	return await readAs(file, 'DataURL') as void
}
export {
	readAs_DataURL as readAsDataURL,
}
