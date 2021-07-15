import { readAs } from './readAs.js'
export async function readAs_Text(file:File):Promise<void> {
	return await readAs(file, 'Text') as void
}
export {
	readAs_Text as readAsText,
}
