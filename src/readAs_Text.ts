import { readAs } from './readAs'
export function readAs_Text(file:File) {
	return readAs(file, 'Text')
}
export {
	readAs_Text as readAsText,
}
