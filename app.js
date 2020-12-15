
var turn = false
    function myFunction() {
          
        if(turn==true){
            document.getElementById("can").style.transform = "rotate(0deg)"; }
        else{
        document.getElementById("can").style.transform = "rotate(70deg)"
        turn = true
        }
      }
 