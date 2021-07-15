import { readAs } from './readAs.js'
export function readAs_DataURL(file:File) {
	return readAs(file, 'DataURL')
}
export {
	readAs_DataURL as readAsDataURL,
}
