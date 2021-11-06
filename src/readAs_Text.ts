import { readAs } from './readAs.js'
export async function readAs_Text(file:File):Promise<string> {
	return await readAs(file, 'Text') as string
}
export {
	readAs_Text as readAsText,
}
