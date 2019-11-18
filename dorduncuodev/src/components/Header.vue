<template>
<div>
<div class=header>



    <div class=ilksira>
        <div class=logo>
            <router-link to="/foo"><a href="#"><img src="../assets/logo.png" width='320' height='72' ></a></router-link>        
        </div>
    <div class="menu">
        <ul>
   <li> 
       <a href="index.html">YENİ ÜRÜNLER</a> <li></li>
   <li> 
       <a href="index.html">FIRSAT ÜRÜNLERİ</a> <li></li>
   <li>
       <a href="index.html">ÇOCUKLAR İÇİN</a> <li></li>
   <li> 
       <a href="index.html">KAMPANYALAR</a> <li></li>
   <li>
        <a href="index.html">MAKEBLOCK</a> <li></li>
   <li> 
       <a href="index.html">OUTLET</a> <li></li>
   
</ul>
        </div>

<div class="menuyani">
<div class=robo>
<div id="app7">
  <button id="show-modal"  class="uyelikbuton" @click="showModal = true"><img width="60" height="50" src="../assets/robo.png" /></button>
  <modal v-if="showModal" @close="showModal = false">  
  </modal>
</div>
</div>
<div class=sepet>
 <div class="row">
    <div class="col">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart">Sepet (<span class="total-count"></span>)</button></div>
  </div>
  
  
</div>
</div>

    </div>


<div id="ikincisira">
<div class="kategoributon">
  <button onclick="tumkategoriler()" class="kategoributondrop">TÜM KATEGORİLER</button>
  <div id="kategoridrop" class="kategori-dropdown">
    
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/arduino.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Arduino</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
<img src="images/raspberrypi.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Raspberry Pi</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/egitici.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Eğitici Setler</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
<img src="images/3d.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">3D</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/gelistirmekart.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Geliştirme Kartı</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/elektronikkart.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Elektronik Kart</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/motor.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Motor</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/sensor.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Sensör</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/guckaynagi.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Güç Kaynağı</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/prototipleme.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Protipleme / Lehimleme</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/kablosuzhaberlesme.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Kablosuz Haberleşme</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/komponent.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Komponent</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/mekanik.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Mekanik</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/tekerlek.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Tekerlek</a>
	</div>
	
	</div>
	
	<div class=menuitem>
	<div class=menuicon>
	<img src="images/olcu.png" width="50" height="42" alt="">
	</div>
	<div class=menuyazi>
	<a href="#">Ölçü ve Test Aleti</a>
	</div>
	</div>
  </div>
</div>

</div>
</div>








</div>

  

</template>


<script>


export default {
    
  name: 'Header'

        }

       
  
</script>

<style>
.header{
	background:white;
	
	height:210px;
	
}
.ilksira{
	height:75px;
	position:fixed;
	z-index:200;
	background:white;
	width:100%;
}

.logo{
	padding-top:15px;
	padding-left:20px;
	width:380px;
	float:left;
    margin-left:100px;
	height:75px;
	
}

.menu{
	float:left;
	padding-top:38px;
	height:52px;
	margin-left:40px;
}


.menu ul{
	list-style-type: none;

    margin: 0;

    padding: 0;

    overflow: hidden;
}

.menu li{
	float:left;
	margin-right:25px;
}

.menu li a{
	
	display: block;
    text-decoration:none; 
	color: #666666;
	font-size: 12px;
    font-family:lucida sans unicode,lucida grande,sans-serif;
	font-weight: 600;

   
	
}

.menuyani{
	margin-top:20px;
	float:left;
	margin-left:30px;
}

.robo{float:left;}

.uyelikbuton{
	height:50px;
	width:50px;
    border-style:none;
	background:none;
	margin-left:-20px;
	pointer:progress;
}

.uyelikbuton:hover{
	cursor:pointer;
}

.sepet{
	float:left;
	margin-left:30px;
	margin-top:10px;
}

#ikincisira{
	float:left;
	border-top:1px solid grey;
    margin-top:90px;
	width:100%;
}

.kategoributon {
background:#095279;
	width:320px;
	height:50px;
	margin-left:120px;
	float:left;
}

/* Dropdown Content (Hidden by Default) */
.kategori-dropdown {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  
}

/* Links inside the dropdown */
.kategori-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.kategori-dropdown a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

kategoributondrop {
  background-color: #095279;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width:320px;
}

/* Dropdown button on hover & focus */
.kategoributondrop:hover, .kategoributondrop:focus {
  background-color: #095279;
}

.menuitem{
	float:left;
	height:46px;
	margin-top:-10px;
	border-style:solid;
	border-width:0.09ex;
	border-color:#eaeaea;
}

.menuicon{
	width:50px;
	float:left;
	
}

.menuyazi{
	float:left;
	width:250px;
	height:42px;
	background:white;
	padding-left:20px;
	padding-top:5px;
	display:block;

}

#aramakutusu { 
height:50px;
background:'../assets/aramakutusu.png';
text-align:left; 
float:left;

}
#aramakutusu #AKutu { 
 width:650px;  
 background:transparent; 
 float:left;
 height:45px;
 border:none;
 
}
#aramakutusu #AButon {
 width:50px; padding:5px; 
 background:url("../assets/aramalogo.png");
 outline:none; text-indent:-9999px; 
 height:50px;
 float:right;
 
}

.aramayazi{
	width:700px;
	height:50px;
	margin-left:30px;
	border-style:none;
	font-size:12px;	
	float:left;
	
}

.aramadropdown {
 

  margin-top:20px;
  float:left;
  margin-right:30px;
}







</style>