
const handlechange=()=>{
    if(document.getElementById("user-name").value==""||document.getElementById("user-batch").value==""){
        document.getElementById("share").style.display = "none"
   }
   else{
     document.getElementById("share").style.display = "block"
     if(  document.getElementById("share").style.visibility == "hidden"){
        document.getElementById("share").style.visibility == "visible"
     }
   }
}


$('#contactform').on('submit', function(event) {
    document.getElementById("share").style.visibility = "hidden"
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_36drl1r');
    formData.append('template_id', 'template_bgfzz4d');
    formData.append('user_id', 'CAPNuWm_T25OjX75r');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        console.log('Your mail is sent!');
        document.getElementById("emailok").style.display = "block"
 
        document.getElementById("emailok").innerText = "Query Sent Successfully! "
    }).fail(function(error) {
        console.log('Oops... ' + JSON.stringify(error));
        document.getElementById("emailok").style.display = "block"
  
        document.getElementById("emailok").innerText = "Sorry, There was an Error!"
    });
});


setInterval(()=>{
    document.getElementById("emailok").style.animation = "email 0.5s 0.5s 1 ease"
},2000)

setInterval(()=>{
     document.getElementById("emailok").style.animation = "none"
},3000)


















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
console.log("hi")
