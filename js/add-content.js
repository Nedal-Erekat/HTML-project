/*var today = new Date();
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
document.write('<h4>'+today+'</h4>');*/

var MovieType= function(){
    var choosen = prompt('What kind of movies would like to watch? Action,thrilling or romantic');
    var Best;
    if (choosen === 'Action'){
        Best = '<img src="http://photo.elcinema.com.s3.amazonaws.com/uploads/_315x420_ecc7a7c9d40d2711ac254d12316ce13ce63c46fe5ab2e32fb261efe55dca9aec.jpg">';
    }
    else if (choosen === 'thrilling'){
        Best = '<img src="https://i.pinimg.com/564x/39/92/63/39926312956b93e1c9dedbea15be3679.jpg">';
    }
    else if (choosen === 'romantic'){
        Best = '<img src="https://static.parade.com/wp-content/uploads/2020/01/Notebook.jpg">';
    }
    else {
        Best = '<h1>Does not match, look below for other options<h1>';
        
    }
    return Best;

}