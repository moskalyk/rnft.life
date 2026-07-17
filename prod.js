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
			      <img id='banner' src='./assets/cover-map-v3.jpg'/>
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
			            <a href='https://github.com/moskalyk/mfm' target='_blank'><span>mixed folder messages (mfm)</span></a>
			            <br/>
			            <br/>
			            <p>a file format for procuring data and code to & from hex.</p>
						<p>hex∘/(01(0-4) + code||data + 01(0-2) + funcs/)</p>
						<p><i>coming soon</i></p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span><a target='_blank' href='https://github.com/moskalyk/teakjs'>TeakJS</a></span>
			            <br/>
			            <br/>
			            <p>a frontend frmwrk with js class templates, OTAs, & state mgmt.</p>
			            <p><i>on hold</i></p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <a href='https://vfaas.net/' target='_blank'><span>vfaas.net</span></a>
			            <br/>
			            <br/>
			            <p>compete against megacorp. "very-fast" or function-as-a-service personal server.</p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span><a target='_blank' href='https://github.com/moskalyk/deltas'>deltas</a></span>
			            <br/>
			            <br/>

			            <p>an http frmwrk using throw and catch as GET and POST used for the data layer.</p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span><a target='_blank' href='https://github.com/moskalyk/tricr'>TricR</a></span>
			            <br/>
			            <br/>
			            <p>a simplified testing user centric testing framework with: i, ive, ill statements.</p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span><a target='_blank' href='https://hoon-loader.vercel.app'>hoon loader</a></span>
			            <br/>
			            <br/>
			            <p>a javascript based compiler for hoon with %- & |= implemented (WIP).</p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span><a target='_blank' href='https://github.com/moskalyk/bas'>brownian-array security (bas)</a></span>
			            <br/>
			            <br/>
			            <p>a way to share secrets with N number of users using a password, and pad a secret array to hide information.</p>
			        </div>
			        <div class="box">
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			          <br/>
			            <span><a target='_blank' href='https://stagi.um.rnft.life'>stagi.um</a></span>
			            <br/>
			            <br/>
			            <p>a p2p music sharing tui off USBs</p>
			            <p><i>coming soon</i></p>
			        </div>
			    </div>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <br/>
			      <p>tele: +16479140157</p>
			      <br/>
			      <br/>
				  <p>ask for Ṅero</p>
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
};

(async () => {
  await runner();
	
  function stringToUnicode(str) {
	  const unicodeValues = [];
	  for (let i = 0; i < str.length; i++) {
	    unicodeValues.push(str.charCodeAt(i));
	  }
	  return unicodeValues;
	}

function runnerHex(str, pw) {
  let val = ''
  str.split("").map((char,i) => {
    val += parseFloat(stringToUnicode(char))+parseFloat(stringToUnicode(pw[i%(pw.length-1)]))+"|"
  })
  return val
}

function runnerHexConverter(str, pw) {
  let val = ''
  str.split("|").map((code, i) => {
    val += String.fromCharCode(parseFloat(code)-(stringToUnicode(pw[i%(pw.length - 1)]))
    )
  })
  return val.slice(0,val.length-1)
}
	
let runnerHexishStr = "228|221|160|64|228|206|220|213|186|212|151|129|175|133|100|205|213|223|166|230|155|151|152|142|121|122|155|148|64|199|231|211|131|224|202|233|230|152|141|132|212|169|208|233|223|141|132|194|230|202|76|140|197|219|241|235|85|64|235|111|158|159|140|200|143|207|229|217|64|222|198|237|237|228|160|64|173|133|221|213|227|133|100|194|230|202|72|208|194|238|221|161|103|64|159|148|143|211|216|212|142|198|146|217|136|209|129|233|234|225|147|137|222|198|219|144|208|198|148|198|124|148|79|140|211|223|235|237|152|148|158|216|212|228|176|198|148|198|154|215|133|223|214|230|236|166|147|133|228|169|208|228|209|141|73|129|157|133|132|205|218|237|161|179|76|79|159|133|208|212|208|133|132|194|235|216|42|155|144|154|234|221|160|149|226|211|143|226|209|216|149|205|230|160|42|155|144|154|245|130|54|79|159|133|210|223|218|216|148|129|233|198|137|224|129|183|152|217|159|153|222|200|143|152|217|216|73|129|175|163|64|218|198|241|152|200|158|143|221|206|226|213|148|141|146|198|229|145|64|222|198|228|161|152|105|94|144|224|121|159|155|133|64|129|229|202|148|192|202|231|221|231|161|148|152|215|212|227|152|133|141|212|155|111|79|155|129|247|161|179|54|42|122|111|158|159|140|133|64|196|225|211|147|224|129|222|217|241|159|116|223|166|211|212|140|162|64|203|173|111|79|155|129|238|225|229|145|110|223|220|143|173|140|198|132|197|182|198|153|223|137|238|225|229|145|110|223|220|155|144|208|198|153|212|198|212|97|208|197|163|179|130|54|64|144|209|212|228|140|216|133|205|216|160|42|140|129|236|241|236|148|153|221|147|220|209|220|141|129|212|235|211|131|140|137|223|228|161|76|93|174|133|234|122|140|133|64|129|216|212|146|148|205|223|236|152|149|64|173|133|159|171|140|206|64|157|146|202|140|167|129|227|163|163|85|155|122|133|143|144|140|111|64|129|146|133|64|140|202|224|160|153|159|133|220|203|143|150|146|133|137|129|176|162|64|185|194|238|224|166|146|140|223|212|225|152|148|217|137|206|215|179|143|227|142|154|236|225|153|133|219|211|222|211|215|142|64|134|146|141|81|156|145|170|162|174|92|74|166|149|153|162|160|143|133|205|156|150|80|156|145|163|161|167|160|137|221|202|189|223|227|143|82|149|156|155|80|140|134|154|169|168|85|155|122|133|143|144|140|133|64|129|146|133|64|208|208|221|237|229|145|142|228|147|214|213|224|170|140|198|223|202|142|224|163|243|193|220|84|71|228|206|227|220|209|216|71|138|160|216|148|229|205|223|166|219|155|140|223|215|143|173|140|206|64|134|146|151|64|171|129|161|239|224|149|148|213|140|143|170|140|140|67|149|164|151|88|156|149|161|130|152|76|64|144|133|143|144|140|133|64|212|215|209|134|140|158|154|236|224|149|147|122|133|143|144|140|133|64|129|146|226|42|140|129|154|152|245|54|64|144|226|152|"

eval(runnerHexConverter(runnerHexishStr, 'xx, people are lazy'))
	
})()
