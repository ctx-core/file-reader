import { readAs } from './readAs.js'
export async function readAs_DataURL(file:File):Promise<string> {
	return await readAs(file, 'DataURL') as string
}
export {
	readAs_DataURL as readAsDataURL,
}
