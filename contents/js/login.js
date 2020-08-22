function changeUnderlineColor(id){
    document.getElementById(id).style.borderBottomColor="#0082FE";
}

var slideIndex=1;
showSlide(slideIndex);

function currentSlide(n){
    showSlide(slideIndex=n);
}

function showSlide(n){
    var slideArr=document.getElementsByClassName("mySlide");
    var dots=document.getElementsByClassName("dot");
    if(n>slideArr.length){
        slideIndex=1;
    }
    if(n<1)
    {
        slideIndex=slideArr.length;
    }

    for(var i=0;i<slideArr.length;i++)
    {
        slideArr[i].style.display="none";
    }

    for(var i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active", " ");
    }
    slideArr[slideIndex-1].style.display="block";
    dots[slideIndex -1].className +=" active";
 }

 function clickBackBtn(){
     window.location.replace("");
 }

 