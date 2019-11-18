<template>
  <div class=genel>
    <div>
  <h1>  {{ $route.meta.title }}</h1>
        <button class="footerbuton" @click="toggle = !toggle" >FOOTER AÇ/KAPAT</button>
    </div>

    

    <div class=footer v-show="toggle">
        
        <p><footer class="col col-12 fl" id="footer" style="margin: 0px; padding: 0px 10px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: 13px; line-height: inherit; font-family: &quot;Open Sans&quot;, sans-serif; vertical-align: baseline; float: left; box-sizing: border-box; width: 1526.4px; position: relative; z-index: 11; color: rgb(0, 0, 0); background-color: rgb(247, 247, 247);">
<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
	<div class="col col-12" id="footerMiddle" style="margin: 0px; padding: 45px 10px 25px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 1526.4px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
		<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
			<div class="inner" style="margin: 0px auto; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; width: 1320px;">
				<div class="col col-8 col-sm-12 altTabs" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 879.987px;">
					<div class="box col-12 col-sm-6 col-xs-12" id="social" style="margin: 20px 0px 0px; padding: 10px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 859.987px;">
						<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
							<span style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch: inherit; line-height: 20px; font-family: inherit; vertical-align: baseline; text-transform: capitalize; word-break: break-all; display: block; color: rgb(227, 61, 37);">SOSYAL MEDYADA BİZİ TAKİP EDİN</span><ul style="margin: 0px; padding: 10px 0px 0px; border: 0px; font: inherit; vertical-align: baseline; list-style-type: none;">
							<li style="margin: 0px 5px 0px 0px; padding: 0px 10px 10px 0px; border: 0px; font: inherit; vertical-align: baseline; float: left; width: 30px; height: 30px; display: block;"><a data-target="blank" href="https://www.facebook.com/Robotistancom" rel="nofollow" style="margin: 0px; padding: 4px 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12px; line-height: 14px; font-family: inherit; vertical-align: baseline; text-decoration-line: none; color: rgb(9, 82, 121); cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; width: 30px; height: 30px; display: block;"><img alt="Sosyal Medya - 1" src="https://www.robotistan.com/Data/EditorFiles/fb.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: 30px; float: left; width: 30px;" /></a></li>
							<li style="margin: 0px 5px 0px 0px; padding: 0px 10px 10px 0px; border: 0px; font: inherit; vertical-align: baseline; float: left; width: 30px; height: 30px; display: block;"><a data-target="blank" href="https://twitter.com/Robotistan" rel="nofollow" style="margin: 0px; padding: 4px 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12px; line-height: 14px; font-family: inherit; vertical-align: baseline; text-decoration-line: none; color: rgb(9, 82, 121); cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; width: 30px; height: 30px; display: block;"><img alt="Sosyal Medya - 2" src="https://www.robotistan.com/Data/EditorFiles/tw.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: 30px; float: left; width: 30px;" /></a></li>
							<li style="margin: 0px 5px 0px 0px; padding: 0px 10px 10px 0px; border: 0px; font: inherit; vertical-align: baseline; float: left; width: 30px; height: 30px; display: block;"><a data-target="blank" href="https://instagram.com/robotistan/" rel="nofollow" style="margin: 0px; padding: 4px 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12px; line-height: 14px; font-family: inherit; vertical-align: baseline; text-decoration-line: none; color: rgb(9, 82, 121); cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; width: 30px; height: 30px; display: block;"><img alt="Sosyal Medya - 3" src="https://www.robotistan.com/Data/EditorFiles/ins.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: 30px; float: left; width: 30px;" /></a></li>
							<li style="margin: 0px 5px 0px 0px; padding: 0px 10px 10px 0px; border: 0px; font: inherit; vertical-align: baseline; float: left; width: 30px; height: 30px; display: block;"><a data-target="blank" href="https://www.youtube.com/c/robotistan" rel="nofollow" style="margin: 0px; padding: 4px 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12px; line-height: 14px; font-family: inherit; vertical-align: baseline; text-decoration-line: none; color: rgb(9, 82, 121); cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; width: 30px; height: 30px; display: block;"><img alt="Sosyal Medya - 6" src="https://www.robotistan.com/Data/EditorFiles/youtube.png" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: 30px; float: left; width: 30px;" /></a></li>
							</ul>
						</div>
					</div>
					<div class="box col-6 col-xs-12 storeLinks plNone" style="margin: 0px; padding-top: 10px; padding-right: 0px !important; padding-bottom: 10px; padding-left: 0px !important; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 429.987px;">
						<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
							<a class="col col-6" href="https://itunes.apple.com/app/apple-store/id1228046962?pt=118631851&amp;ct=Site%20link&amp;mt=8" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; box-sizing: border-box; width: 224.988px;" target="blank"><img alt="" src="https://www.robotistan.com/Data/EditorFiles/app_store.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: auto;" /></a><a class="col col-6" href="https://play.google.com/store/apps/details?id=com.tsoft.robotistan&amp;referrer=utm_source%3Drobotistancom" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; box-sizing: border-box; width: 224.988px;" target="blank"><img alt="" src="https://www.robotistan.com/Data/EditorFiles/play_store.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: auto;" /></a></div>
					</div>
				</div>
				<div class="col col-4 col-sm-12 a-center mutluMusteriBar" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; text-align: center; float: left; box-sizing: border-box; width: 439.987px;">
					<div class="col col-sm-6 col-xs-12" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box;">
						<div class="row mb" style="margin: 0px -10px 10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
							<a class="col col-12" href="https://www.google.com/shopping/ratings/account/metrics?q=robotistan.com&amp;c=TR&amp;v=4" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; box-sizing: border-box; width: 419.987px;"><img alt="müşteri yorumları" src="https://www.robotistan.com/Data/EditorFiles/yorum.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: auto;" /></a></div>
					</div>
					<div class="box col-12 col-sm-6 col-xs-12 a-center" style="margin: 0px; padding: 10px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 419.987px;">
						<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
							<a class="col col-6" href="https://www.robotistan.com/deloitte-fast-50.shtm" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; box-sizing: border-box; width: 209.988px;"><img alt="technology fast 50 2016 turkey" src="https://www.robotistan.com/Data/EditorFiles/fast.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: auto;" /></a><a class="col col-6" href="https://www.robotistan.com/deloitte-fast-50.shtm" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s; float: left; box-sizing: border-box; width: 209.988px;"><img alt="technology fast 500 2016 emea" src="https://www.robotistan.com/Data/EditorFiles/fast2.jpg" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; height: auto;" /></a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col col-12" id="footerBottom" style="margin: 0px; padding: 0px 10px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 1526.4px; min-height: 50px;">
		<div class="row mb" style="margin: 0px -10px 10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
			<div class="inner" style="margin: 0px auto; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; width: 1320px;">
				<div class="box col-12" id="footerCards" style="margin: 0px; padding: 10px; border: 1px solid rgb(236, 236, 236); font: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 1320px; flex: 1 1 auto; display: flex; flex-wrap: wrap; align-items: baseline;">
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-world" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -196px no-repeat; overflow: hidden; text-indent: -9999px; width: 69px; height: 11px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-axess" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -58px -322px no-repeat; overflow: hidden; text-indent: -9999px; width: 47px; height: 14px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-maximum" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -240px no-repeat; overflow: hidden; text-indent: -9999px; width: 60px; height: 16px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-bonus" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -306px no-repeat; overflow: hidden; text-indent: -9999px; width: 55px; height: 12px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-advantage" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -225px no-repeat; overflow: hidden; text-indent: -9999px; width: 62px; height: 11px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-paraf" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -339px no-repeat; overflow: hidden; text-indent: -9999px; width: 31px; height: 20px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-visa" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -63px -306px no-repeat; overflow: hidden; text-indent: -9999px; width: 41px; height: 11px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-master-card" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -66px -286px no-repeat; overflow: hidden; text-indent: -9999px; width: 28px; height: 15px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-paypal" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -322px no-repeat; overflow: hidden; text-indent: -9999px; width: 50px; height: 13px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-verified-by-visa" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -132px no-repeat; overflow: hidden; text-indent: -9999px; width: 87px; height: 26px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-master-secure-code" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -60px no-repeat; overflow: hidden; text-indent: -9999px; width: 93px; height: 26px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-rapid-ssl" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px 0px no-repeat; overflow: hidden; text-indent: -9999px; width: 105px; height: 26px;">
							&nbsp;</div>
					</div>
					<div class="sprite-wrapper" style="margin: 0px; padding: 10px 18px; border: 0px; font: inherit; vertical-align: baseline; height: 18px;">
						<div class="sprt-chip-and-pin" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: inline-block; background: url(&quot;/Data/EditorFiles/css_sprite/robotistan.png&quot;) -4px -30px no-repeat; overflow: hidden; text-indent: -9999px; width: 95px; height: 26px;">
							&nbsp;</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="box col-12" id="footerEnBottom" style="margin: 0px; padding: 10px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12px; line-height: 15px; font-family: inherit; vertical-align: baseline; float: left; box-sizing: border-box; width: 1526.4px; color: rgb(155, 155, 155);">
		<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
			<div class="inner" style="margin: 0px auto; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; width: 1320px;">
				<div class="box col-sm-12" style="margin: 0px; padding: 10px; border: 0px; font: inherit; vertical-align: baseline; float: left; box-sizing: border-box;">
					<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
						T&uuml;rkiye&#39;nin Maker Marketi<br />
						Robotistan, Robotistan Elektronik Ticaret AŞ tescilli markasıdır.</div>
				</div>
				<div class="box col-sm-12 fr" style="margin: 0px; padding: 10px; border: 0px; font: inherit; vertical-align: baseline; float: right; box-sizing: border-box;">
					<div class="row" style="margin: 0px -10px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; clear: both;">
						*Teknolojinin gelişmesine katkı sağlayan t&uuml;m bilim insanlarını saygıyla anıyoruz.<br />
						2010-2019 Copyright &copy; robotistan.com T&uuml;m hakları saklıdır, Sitedeki g&ouml;rseller ve yazılar izinsiz kullanılamaz.</div>
				</div>
			</div>
		</div>
	</div>
</div>
</footer>
<div class="box col-12" id="tsoft-eticaret-sistemleri" style="margin: 0px; padding: 10px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; line-height: 30px; font-family: &quot;Open Sans&quot;, sans-serif; vertical-align: baseline; float: left; box-sizing: border-box; width: 1526.4px; color: rgb(59, 55, 52); text-align: center; background: rgb(240, 240, 240);">
	<div class="fl col-12" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; float: left; width: 1506.4px;">
		<a href="http://www.tsoft.com.tr/" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s;" target="_blank" title="T-Soft E-ticaret Sistemleri"><span style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; color: rgb(236, 100, 8);">T</span>-Soft&nbsp;</a><a href="http://www.tsoft.com.tr/" style="margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; text-decoration-line: none; cursor: pointer; transition-timing-function: ease-in-out; transition-duration: 0.2s;" target="_blank" title="E-ticaret">E-Ticaret</a>&nbsp;Sistemleriyle Hazırlanmıştır.</div>
</div>


    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Footer',
  components: {
  
  },
  data(){
      return{
          toggle: true
      }
  },
             
}
</script>
<style>

.footer{
  
 position:fixed;
left:130px;
bottom:0px;
text-align:center;
}


.footerbuton{
    position:fixed;
    left:30px;
    bottom:30px;
    z-index:11;
    background:red;
    font-size:large;
    border-radius:9px;
    font-style: oblique;
    color:white;
}
.deneme{
    height:2000px;
 
}



</style>