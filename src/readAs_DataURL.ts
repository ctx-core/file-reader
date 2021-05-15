import { readAs } from './readAs'
export function readAs_DataURL(file:File) {
	return readAs(file, 'DataURL')
}
export {
	readAs_DataURL as readAsDataURL,
}
