window.onload = function() {
    var button = document.querySelector('button');
  
  button.addEventListener('click', function() {
     alert("Let's Rock!!");
    });
  }
  
   function openGoogleInPopUpWindow()
       {
           window.open("congratulations.html","WilliamWindow","bg=black,left=320,top=320,width=498,height=225,directories=1,menubar=1,location=0,toolbar=0,resizable=0,scrollbars=1,status=1");
       }
       
document.getElementById("popup").className = "popup";