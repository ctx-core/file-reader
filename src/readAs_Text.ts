import { readAs } from './readAs.js'
export function readAs_Text(file:File) {
	return readAs(file, 'Text')
}
export {
	readAs_Text as readAsText,
}
