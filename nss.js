

const upeve = async()=>{
    const data = await fetch('https://nss2server.vercel.app/upevents');
    const exp = await fetch('https://nss2server.vercel.app/experience')
    const allupevents =await data.json();
    const allexp = await exp.json();
    console.log(allupevents)
   allupevents.reverse()
    const base64arr = []
    allupevents.forEach(Element=>{
        const arr =   new Uint8Array(Element.Image.data.data);
        console.log(arr)
    const base64String = 

         btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
         );
    base64arr.push(base64String)
    })
  console.log(base64arr)
    document.getElementById("event1").innerHTML = `${allupevents[0]?allupevents[0].Title:"No event"}(${allupevents[0]?allupevents[0].Date:""})`
    document.getElementById("event2").innerHTML = `${allupevents[1]?allupevents[1].Title:"No event"}(${allupevents[1]?allupevents[1].Date:""})`
    document.getElementById("event3").innerHTML = `${allupevents[2]?allupevents[2].Title:"No event"}(${allupevents[2]?allupevents[2].Date:""})`
    document.getElementById("event4").innerHTML = `${allupevents[3]?allupevents[3].Title:"No event"}(${allupevents[3]?allupevents[3].Date:""})`
    document.getElementById("event5").innerHTML = `${allupevents[4]?allupevents[4].Title:"No event"}(${allupevents[4]?allupevents[4].Date:""})`

     document.getElementById("event11").innerHTML = `<p>${allupevents[0]?allupevents[0].Event:"No event"}</p>`
     document.getElementById("event22").innerHTML = `<p>${allupevents[1]?allupevents[1].Event:"No event"}</p>`
     document.getElementById("event33").innerHTML = `<p>${allupevents[2]?allupevents[2].Event:"No event"}</p>`
     document.getElementById("event44").innerHTML = `<p>${allupevents[3]?allupevents[3].Event:"No event"}</p>`
     document.getElementById("event55").innerHTML = `<p>${allupevents[4]?allupevents[4].Event:"No event"}</p>`

     document.getElementById("event11-img").src = `data:image/png;base64,${base64arr[0]?base64arr[0]:""}`
     document.getElementById("event22-img").src = `data:image/png;base64,${base64arr[1]?base64arr[1]:""}`
     document.getElementById("event33-img").src = `data:image/png;base64,${base64arr[2]?base64arr[2]:""}`
     document.getElementById("event44-img").src = `data:image/png;base64,${base64arr[3]?base64arr[3]:""}`
     document.getElementById("event55-img").src = `data:image/png;base64,${base64arr[4]?base64arr[4]:""}`


     allexp.forEach(Element=>{
        const expdisp = document.createElement("div")
        const suggestion = document.createElement("div")
        const detcont = document.createElement("div")
        const name = document.createElement("section")
        const batch = document.createElement("section")

        expdisp.className = "exp";
        suggestion.className= "suggestion"
        detcont.className = "sugg-det"

        name.innerHTML = Element.Name;
        batch.innerHTML = Element.Batch;
        suggestion.innerHTML = Element.Exp;

        detcont.appendChild(name);
        detcont.appendChild(batch)
        expdisp.appendChild(suggestion);
        expdisp.appendChild(detcont);

        document.getElementById("sugg-display").append(expdisp)
        
     })
}

upeve();



document.getElementById("sugg-display-btn").addEventListener("click",()=>{
    document.getElementById("exp-cont").style.display = "flex"
})

document.getElementById("share").addEventListener("click", async()=>{
    document.getElementById("exp-cont").style.display = ""
    const  exp =  {
        Name:document.getElementById("exp-name").value,
        Batch:document.getElementById("exp-batch").value,
        Exp:document.getElementById("exp-matter").value
    }

 await fetch ("https://nss2server.vercel.app/experience",{method:"post", headers: { "Content-Type": "application/json" }, body: JSON.stringify(exp)})
 .then().then( window.location.reload())
 

    await upeve();

})







document.getElementById("selbtn12").addEventListener("click", openclgweb)
function openclgweb() {
    window.open("https://www.iiitk.ac.in/")
}

document.getElementById("selbtn11").addEventListener("click", opennssweb)
function opennssweb() {
    window.open("https://nss.gov.in/")
}

document.getElementById("selbtn13").addEventListener("click", openevents)
function openevents() {
    window.location.href = "/Events.html"
}
document.getElementById("gotoeve").addEventListener("click", openevents)
function openevents() {
    window.location.href = "/Events.html"
}
document.getElementById("selbtn14").addEventListener("click", openmembers)
function openmembers() {
    window.location.href = "/members.html"
}
document.getElementById("selbtn16").addEventListener("click", openfaq)
function openfaq() {
    window.location.href = "/faqs.html"
}
document.getElementById("selbtn15").addEventListener("click", opencontacts)
function opencontacts() {
    window.location.href = "/contacts.html"
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
document.querySelector("#eventscroll1").addEventListener("click", show, false)
function show(e) {
    document.getElementById("up-event-des").style.display = "initial"
    console.log(e.target.id)
    if (e.target.id == "event1") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event11").innerHTML
        document.getElementById("des-img").innerHTML = document.getElementById("event1-img").innerHTML
        console.log("hi")
    }
    else if (e.target.id == "event2") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event22").innerHTML
        document.getElementById("des-img").innerHTML = document.getElementById("event2-img").innerHTML
        console.log("hello")
    }
    else if (e.target.id == "event3") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event33").innerHTML
        document.getElementById("des-img").innerHTML = document.getElementById("event3-img").innerHTML
    }
    else if (e.target.id == "event4") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event44").innerHTML
        document.getElementById("des-img").innerHTML = document.getElementById("event4-img").innerHTML
    }
    else if (e.target.id == "event5") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event55").innerHTML
        document.getElementById("des-img").innerHTML = document.getElementById("event5-img").innerHTML
    }
    e.stopPropagation();
}


function closedes() {
    document.getElementById("up-event-des").style.display = "none"
}

const slides = document.querySelectorAll(".test-slides")
console.log(slides)
var counter = 0;
setInterval(function () {
   counter ++
    if (counter >=8) {
        counter = 0;
    }
    
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            slide.style.transition - "smooth"
        })}, 30000)

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

});
function slidediv() {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            slide.style.transition - "smooth"
        } )}
function prevslide() {
    counter--;
    slidediv();
    if (counter < 0) {
        counter = 8
    }}
function nextslide() {
    counter++;
    slidediv();
    if (counter >=7 ) {
        counter = 0
    }}

var counter1=0;

const sneak_peak=document.querySelectorAll(".sneak-peak")
sneak_peak.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
function slide_sneak_peak(){
    sneak_peak.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter1*100}%)`
        }
    )}
function prevslide_sneak() {
    counter1--;
    slide_sneak_peak();
    if (counter1 < 0) {
        counter1 = 6
    }}
function nextslide_sneak() {
    counter1++;
    slide_sneak_peak();
    if (counter1 > 4) {
        counter1 = 0
    }}
setInterval(function(){
    counter1++
    if(counter1>5){
        counter1=0;
    }
    sneak_peak.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter1*100}%)`
        })},7000)