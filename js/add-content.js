var today = new Date();
var hourNow = today.getHours();
var greeting;
var Massege = prompt('what is your age?');
//var q=confirm("confairem the information");
var Name = prompt('what is your Name?');
if (Massege => 18) {
 greeting = 'Adult!';
 } else if (Massege < 18) {
 greeting = 'Kid';
 } 
document.write('<h3>'+greeting+'</h3>');
document.write('<h1>'+'Hello'+ Name+'</h1>');
document.write('<h4>'+today+'</h4>');