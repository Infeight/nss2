document.getElementById("selbtn111").addEventListener("click",openhome)
function openhome(){
    window.open("/index.html")
}
document.getElementById("selbtn12").addEventListener("click",openclgweb)
function openclgweb(){
    window.open("https://www.iiitk.ac.in/")
}


document.getElementById("selbtn13").addEventListener("click",openevents)
function openevents(){
    window.location.href="/Events.html"
}
// document.getElementById("selbtn14").addEventListener("click",openmembers)
// function openmembers(){
//     window.location.href="/nss html/members.html"
// }
document.getElementById("selbtn15").addEventListener("click",opencontacts)
function opencontacts(){
    window.location.href="/contacts.html"
}
document.getElementById("options").addEventListener("click",showheader)
function showheader(){
    if(document.getElementById("options").value=="close"){
    document.getElementById("header").style.display="initial"
    document.getElementById("options").innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>'
    document.getElementById("options").value="open"
    document.getElementById("options").style.backgroundColor=" #31398a"
}

   else {
        document.getElementById("header").style.display="none"
        document.getElementById("options").innerHTML='<i class="fa fa-server" aria-hidden="true"></i>'
        document.getElementById("options").value="close"
        document.getElementById("options").style.backgroundColor=" white"}
    
}
document.getElementById("selbtn14").addEventListener("click",openmembersopt)
function openmembersopt(){
    if(document.getElementById("selbtn14").value=="close"){
        document.getElementById("selbtn14").value="open"
        document.getElementById("member-opt").style.height="6vw"
        document.getElementById("member-opt").style.visibility="visible"
        document.getElementById("member-opt").style.transform="translateY(80px)"
        document.getElementById("member-opt").style.transitionDuration="0.4s"
        document.getElementById("member-btn").style.height="2.5vw"
        document.getElementById("member-btn").style.visibility="visible"
        document.getElementById("coordinator-btn").style.visibility="visible"
        document.getElementById("coordinator-btn").style.height="2.5vw"
    }
    else if(document.getElementById("selbtn14").value=="open"){
        document.getElementById("selbtn14").value="close"
        document.getElementById("member-opt").style.visibility="hidden"
        document.getElementById("member-btn").style.visibility="hidden"
        document.getElementById("coordinator-btn").style.visibility="hidden"
        document.getElementById("member-opt").style.transform="translateY(-60px)"
        document.getElementById("member-opt").style.transform="scale(1)"
        document.getElementById("member-opt").style.transitionDuration="0.4s"
        document.getElementById("member-opt").style.height="1vw"
        document.getElementById("member-btn").style.height="1vw"
        document.getElementById("coordinator-btn").style.height="1vw"
    }  
}
document.getElementById("member-btn").addEventListener("click",openmembers)
function openmembers(){
    window.location.href="/members.html"
}
document.getElementById("coordinator-btn").addEventListener("click",opencoordinators)
function opencoordinators(){
    window.location.href="/coordinators.html"
}
document.getElementById("selbtn114").addEventListener("click",openmembersopt1)
function openmembersopt1(){
    if(document.getElementById("selbtn114").value=="close1"){
        document.getElementById("selbtn114").value="open1"
        document.getElementById("member-opt").style.height="12vw"
        document.getElementById("member-opt").style.visibility="visible"
        // document.getElementById("member-opt").style.transform="translateY(80px)"
        // document.getElementById("member-opt").style.transitionDuration="0.4s"
        document.getElementById("member-btn").style.height="4.5vw"
        document.getElementById("member-btn").style.visibility="visible"
        document.getElementById("coordinator-btn").style.visibility="visible"
        document.getElementById("coordinator-btn").style.height="4.5vw"
        document.getElementById("selbtn15").style.transform="translateY(80px)"
    }
    else if(document.getElementById("selbtn114").value=="open1"){
        document.getElementById("selbtn114").value="close1"
        document.getElementById("member-opt").style.visibility="hidden"
        document.getElementById("member-btn").style.visibility="hidden"
        document.getElementById("coordinator-btn").style.visibility="hidden"
        // document.getElementById("member-opt").style.transform="translateY(-60px)"
        document.getElementById("member-opt").style.transform="scale(1)"
         document.getElementById("member-opt").style.transitionDuration="0s"
        document.getElementById("member-opt").style.height="12vw"
        document.getElementById("member-btn").style.height="4.5vw"
        document.getElementById("coordinator-btn").style.height="4.5vw"
        document.getElementById("selbtn15").style.transform="translateY(36px)"
        

    } }