var uname=document.getElementById("name");
var span1=document.getElementById("n");

var uemail=document.getElementById("em");
var span2=document.getElementById("email");

var uphone=document.getElementById("ph");
var span3=document.getElementById("pho");


function contactUs(e){
    e.preventDefault();
    if(uname.value.length >=3){
        span1.style.display="none";
    }
    else{
     span1.style.display="block";
    }
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{0,3})$/;
    if (emailRegex.test(uemail.value)) {
        span2.style.display="none";
    }
    else {
        span2.style.display="block";
    }
    if(uphone.value.length ==11){
        span3.style.display="none";
    } else {
        span3.style.display="block";
    }
}