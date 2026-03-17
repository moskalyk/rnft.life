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
	eval(`class HomePage {
	constructor(){}

	async view() {
		return \`
				<div class="App">
			      <div id="tag-title">
			      <img id='banner' src='./assets/lens-blur-map.png'/>
			      <p id='titles'>Radical ᛋ Network FT.</p>
			      </div>
			      <br/>
			      <br/>
			      <div class='opening'>
			        <p>..now right?</p>
			        <br/>
			        <p>f%r you</p>
			        <p>f%r glory</p>
			        <p>f%r magic</p>
			        <p>f%r stability</p>
			        <p>f%r compassion</p>
			        <p>f%r timelessness</p>
			        <p>f%r flâneurs</p>
			        <p>f%r fuck's sake</p>
			      </div>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <div class="container">
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span>mixed folder messages (mfm)</span>
			            <br/>
			            <p>a file format for procuring data and code to & from hex</p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <a href='https://vfaas.net/' target='_blank'><span>vfaas.net</span></a>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span>TeakJS</span>
			            <p>a frontend frmwrk with js class templates, OTAs, & state mgmt</p>
			        </div>
			    </div>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      tele: +16479140157
			      <br/>
			      <br/>
				  ask for Nero
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <div class='footer-wrapper'>
			        <div class='footer-bars'></div>
			        <div class='footer'></div>
			      </div>
			    </div>
			\`
	} 
};


	(async () => {
		const homePage = new HomePage()
		const contents = await homePage.view()
		const element = document.getElementById('anchor');
		const main = contents
		element.setHTMLUnsafe(main)
	})();
`)
}

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