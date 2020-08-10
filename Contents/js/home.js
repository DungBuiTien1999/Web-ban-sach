let slideIndex = 1;
  carousel();

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("image-slider");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

  function carousel() {
    let i;
    let x = document.getElementsByClassName("image-slider");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}    
    x[slideIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}