let slideIndex=1;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex += n)
}

function currentSlide() {
    showSlide(slideIndex=n)
}

function showSlide(n) {
    let i;
    const slides=document.getElementsByClassName("slides");
    
    if (n>slides.length) {
        slideIndex=1;
    }
if (n<1){
    slideIndex=slides.length;
}

for (i=0; i<slides.length ;i++){
    slides[i].style.display="none";
}
slides[slideIndex-1].style.display="block";
}

var int=setInterval(function(){
    plusSlide(1)
},2000)
function stopShow() {
    clearInterval(int);
  }

function filterBrands(selectedBrand){
    var products=document.getElementsByClassName("shoes");

    for (var i=0;i<products.length;i++){
        var productBrand=products[i].getAttribute("data-brand");

        if (selectedBrand === "All" || selectedBrand === productBrand ) {
            products[i].style.display = "inline-block";
        } else {
            products[i].style.display = "none";
        }
    }
}
