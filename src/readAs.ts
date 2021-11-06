// Ported from https://github.com/jahredhope/promise-file-reader/blob/master/PromiseFileReader.js
export function readAs(
	file:File, as: 'ArrayBuffer'|'BinaryString'|'DataURL'|'Text'
):Promise<string|ArrayBuffer|Blob|null|undefined> {
	if (!(file instanceof Blob)) {
		throw new TypeError('Must be a File or Blob')
	}
	return new Promise((resolve, reject)=>{
		const reader = new FileReader()
		reader.onload = (e:Event)=>resolve((e.target as FileReader).result)
		reader.onerror =
			(e:Event)=>
				reject(
					new Error(
						`Error reading ${file.name}: ${(e.target as FileReader).result}`))
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
