

 

document.getElementById("secretbtn").addEventListener("click", doThis);

function doThis() {
document.getElementById("secretbtn").style.display = "none";
document.getElementById("alt-nav-brand").style.display = "block";
document.getElementById("maincontain").style.display = "none";
document.getElementById("hiddencontain").style.display = "block";
 var typed = new Typed('#typed', {
  showCursor: false,
  startDelay: 6400,
  typeSpeed: 180,
  stringsElement: '#typed-strings'
  });

  $(document).ready(function() {
    setTimeout(function() {
      $('#hiddencontain').fadeOut('slow');
      $('#hiddencontain2').fadeIn('slow');
    }, 4500);
    });

    
   
}


