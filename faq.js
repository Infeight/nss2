document.getElementById("selbtn11").addEventListener("click",openhome)
function openhome(){
    window.location.href="/index.html"
}
document.getElementById("selbtn12").addEventListener("click",openclgweb)
function openclgweb(){
    window.open("https://www.iiitk.ac.in/")
}


document.getElementById("selbtn13").addEventListener("click",openevents)
function openevents(){
    window.location.href="/Events.html"
}
document.getElementById("selbtn14").addEventListener("click", openmembers)
function openmembers() {
    window.location.href = "/members.html"
}
document.getElementById("selbtn15").addEventListener("click",opencontacts)
function opencontacts(){
    window.location.href="/contacts.html"
}
document.getElementById("options").addEventListener("click", showheader)
function showheader() {
    if (document.getElementById("options").value == "close") {
        document.getElementById("header").style.display = "initial"
        document.getElementById("header").style.transition = "all 0s ease-out"
        document.getElementById("options").innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
        document.getElementById("options").value = "open"
        document.getElementById("options").style.backgroundColor = "transparent"
    }

    else {
        document.getElementById("header").style.display = "none"
        document.getElementById("options").innerHTML = '<i class="fa fa-server" aria-hidden="true"></i>'
        document.getElementById("options").value = "close"
        document.getElementById("options").style.backgroundColor = "transparent"
    }

}
document.getElementById("selbtn16").addEventListener("click", openfaq)
function openfaq() {
    window.location.href = "/faqs.html"
}

const handleClick = (e)=>{
    e.target.closest(".question").classList.toggle("open")

}
document.querySelectorAll(".question").forEach(ele =>{
    ele.addEventListener("click", handleClick)
})