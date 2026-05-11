let timeknock = 1773705292794 

let rythym = [
	Math.floor(24/10), 
	Math.floor(48/7), 
	Math.floor(9/1), 
	Math.floor(8/4), 
	Math.floor(23/5), 
	Math.floor(92/63), 
	Math.floor(17*3/4.8), 
	Math.floor(9)
];

function runner() {
	eval(`#
	(async () => {
		const homePage = new HomePage()
		const contents = await homePage.view()
		const element = document.getElementById('anchor');
		const main = contents
		element.setHTMLUnsafe(main)
	})();
`)
};

(async () => {
  await runner();
  const timeNow = Date.now()
  let self;
  rythym.map((el) => {
    if(!self && el >= Math.floor(60*60*60*24 % (timeNow - timeknock))){
      document.getElementById('titles').style.color = 'white'
      self = this
    }
  })
})()
