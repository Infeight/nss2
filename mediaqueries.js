function myFunction(x) {
    if (x.matches) { // If media query matches
      
document.getElementById("selbtn114").addEventListener("click",openmembersopt1)
function openmembersopt1(){
    if(document.getElementById("selbtn14").value=="close1"){
        document.getElementById("selbtn14").value="open1"
        document.getElementById("member-opt").style.height="12vw"
        document.getElementById("member-opt").style.visibility="visible"
        document.getElementById("member-opt").style.transform="translateY(80px)"
        document.getElementById("member-opt").style.transitionDuration="0.4s"
        document.getElementById("member-btn").style.height="4.5vw"
        document.getElementById("member-btn").style.visibility="visible"
        document.getElementById("coordinator-btn").style.visibility="visible"
        document.getElementById("coordinator-btn").style.height="4.5vw"
    }
    else if(document.getElementById("selbtn14").value=="open1"){
        document.getElementById("selbtn14").value="close"
        document.getElementById("member-opt").style.visibility="hidden"
        document.getElementById("member-btn").style.visibility="hidden"
        document.getElementById("coordinator-btn").style.visibility="hidden"
        document.getElementById("member-opt").style.transform="translateY(-60px)"
        document.getElementById("member-opt").style.transform="scale(1)"
        document.getElementById("member-opt").style.transitionDuration="0.4s"
        document.getElementById("member-opt").style.height="12vw"
        document.getElementById("member-btn").style.height="4.5vw"
        document.getElementById("coordinator-btn").style.height="4.5vwvw"
    }  
}
    } else {
     console.log("no")
    }
  }
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addEventListener(myFunction)