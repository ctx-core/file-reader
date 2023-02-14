/**
 * Ported from https://github.com/jahredhope/promise-file-reader/blob/master/PromiseFileReader.js
 * @param file{File}
 * @param as{'ArrayBuffer'|'BinaryString'|'DataURL'|'Text'}
 * @returns {Promise<string|ArrayBuffer|Blob|null|undefined>}
 */
export function readAs(
	file, as
) {
	if (!(file instanceof Blob)) {
		throw new TypeError('Must be a File or Blob')
	}
	return new Promise((resolve, reject)=>{
		const reader = new FileReader()
		reader.onload = (e)=>resolve(e.target.result)
		reader.onerror = (e)=>reject(new Error(`Error reading ${file.name}: ${e.target.result}`))
		switch (as) {
			case 'ArrayBuffer':
				return reader.readAsArrayBuffer(file)
			case 'BinaryString':
				return reader.readAsBinaryString(file)
			case 'DataURL':
				return reader.readAsDataURL(file)
			case 'Text':
				return reader.readAsText(file)
			default:
				throw `Invalid as argument: ${as}`
		}
	})
}
