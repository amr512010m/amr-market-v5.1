 var t =prompt('would you like to change your info  prees y to continue or n ');
if(t=='y'){var u =prompt('enter the new email'); var c =prompt('enter the new password'); e=u; p=c;}
else{e='a@g.com';
p='123a';
}
var text=document.getElementById('form');
window.alert('hello to my form!')
window.alert('made by AMR KHALED ')
var n=prompt('enter your name');
var x=prompt('enter email');
var y= prompt('enter password')
var name1=document.getElementById('hello1')
text.style.color='red';
text.innerHTML='signing in failed,try again'
var z;
z=0;
function f(){for(o=0; o<4; o=o+1){if(z>1){var x=prompt('enter email');
var y= prompt('enter password')
var s;  var z;                                                         
}}}
//if statements
if(x==e&&y==p){window.alert('login has been succsesfuled');z=z-5;  text.style.color = 'green'; text.innerHTML='hello ,'+n;  }
 else if(x==e){window.alert('password is false');  z=z+1; }
else if(y==p){window.alert('email is false');  z=z+1;f();} 
else{window.alert('login failed');  z=z+1; f();}
if(z>0){for(o=0; z<4; o=o+1){var x=prompt('enter email');
var y= prompt('enter password');if(x==e&&y==p){window.alert('login has been succsesfuled');z=z+9; text.style.color = 'green';text.innerHTML='hello ,'+n;}
 else if(x==e){window.alert('password is false');  z=z+1; }
else if(y==p){window.alert('email is false');  z=z+1; f();} 
else{window.alert('login failed');  z=z+1; f();} alert('new attemp') ;if(z==3){window.alert('too many attepms, try again later'); z=z+9;}}}
console.log(z);

