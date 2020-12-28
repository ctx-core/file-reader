// Ported from https://github.com/jahredhope/promise-file-reader/blob/master/PromiseFileReader.js
export function readAs(file:File, as) {
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
		reader[`readAs${as}`](file)
	})
}
