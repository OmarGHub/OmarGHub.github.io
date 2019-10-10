let clks = 1;

function myFunction(n) {
clks += n ;
document.getElementById("card1").style.display = "none";
document.getElementById("card2").style.display = "none";
  document.getElementById("card3").style.display = "none";

if (clks > 3) {
  clks = 1;
}
else if (clks < 1) {
  clks = 3;
  }
	
    if (clks == 1) {
  document.getElementById("card1").style.display = "block";
}
  
  
  else  if (clks  == 2) {
  document.getElementById("card2").style.display = "block";
}
  
   else if (clks  == 3) {
  document.getElementById("card3").style.display = "block";
 }
  
}