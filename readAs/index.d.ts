export declare function readAs(
	file:File,
	as:'ArrayBuffer'|'BinaryString'|'DataURL'|'Text'
):Promise<string|ArrayBuffer|Blob|null|undefined>
