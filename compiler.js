
const {open, writeFile} = require('node:fs/promises');

(async () => {

	const file = await open('./templates/homepage.js')

	const fh1 = await file.stat([])
	const buf1 = Buffer.alloc(fh1.size);
	const buffer1 = await file.read(buf1, 0, fh1.size, 0)
	const homepageContents = buffer1.buffer.toString()

	const contents = (await file.read()).buffer.toString()
	const index = await open('./index.js');

	const fh = await index.stat([])
	const buf = Buffer.alloc(fh.size);
	const buffer = await index.read(buf, 0, fh.size, 0)
	const indexContents = buffer.buffer.toString()
	let writtenFile = indexContents.replace('#', homepageContents.toString()).replace('module.exports = HomePage', '').replace('<>','\\`').replace('</>','\\`')
	
	/class []()/
	
	// writtenFile = writtenFile.replace('this.click', writtenFile.)
	
	await writeFile('./prod.js', writtenFile)
})()
