console.log('amr')
var lefta = document.getElementById('left');
var righta = document.getElementById('right');
var slider = document.getElementById('deal');
var images = ['image2.png','imagey.jpg','oip.jpeg','imagez.jpg','letter-a.png'];
var mode = document.getElementById('m');
var darkm = document.getElementById('d');
var list = document.getElementById('list');
var copyx = document.getElementById('copy');
var a =document.getElementById('a1')
var a2 =document.getElementById('a2')
var i;
i = 0;
var ms;
ms='closed';
list.style.display ='none';
slider.style.backgroundImage = "url("+images[i]+")";

lefta.onclick  = function() {
  
   slider.style.backgroundImage = "url("+images[i-1]+")";
    console.log('left');
    i = i-1;
}
righta.onclick  = function() {
    slider.style.backgroundImage = "url("+images[i+1]+")";
i = i +1;
    console.log('right');
}
window.onscrollu =function(){lefta.style.display =' none';righta.style.display =' none';list.style.display = 'none';}
window.onscroll =function(){lefta.style.display =' inline-block';righta.style.display ='inline-block'; }
window.onscroll = function(){lefta.style.display ='none';console.log('the page scrolled');righta.style.display =' none'; list.style.display = 'none';darkm.src = 'list%20(1).png'; ms='closed';}

var icon = document.getElementById('d');
var list = document.getElementById('list');
var ms;
ms = 'c';
icon.onclick =function(){
if(ms=='c'){
    icon.src = 'close.png';
    list.style.display = 'block';
      list.style.marginLeft= '698px;';
   icon.style.width='19px'
    ms='o';
console.log('menu opened');
}
   else{
    icon.src = 'list%20(1).png';
    list.style.display = 'none';
          icon.style.width='53px'
    ms='c';
      
console.log('menu closed');}
}
if(i>4||i<1){slider.style.backgroundColor ='lightskyblue';}

window.onresize=function() {console.log(' the page  resized'); a.style.display='none'; a2.style.display='none'; window.onresize=function() {console.log(' the page  resized'); a.style.display='none'; a2.style.display='none'; w};};
window.onkeyup=function() {console.log('a key is pressed');  var x=prompt('whats your opinion about my web'); 
console.log(x) ;console.log('your opinion has been sent succesfuly')}
window.ondragend=function() {console.log(' an item dragged')}


 
