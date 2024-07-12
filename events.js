


const events = async()=>{
  const data = await fetch('https://nss2server.vercel.app/events');
  const pdfdata = await fetch('https://nss2server.vercel.app/eventpdf');
  const allevents = await data.json()
  const allpdfs = await pdfdata.json()
  console.log(allevents,allpdfs);
  allevents.reverse();
  allevents.forEach(element => {
    
//     const filteredpdf = allpdfs.filter( x => 
//         x.name == element.name 
       
//       );
      
//    const pdfarr = filteredpdf[0].pdf.data.data
   const arr = element.image.data.data
    const base64String = 

         btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
         );
        
  const eventsdisp =   document.createElement("section");
  const eventname = document.createElement("h2")
  const eventsimage = document.createElement("img")
  const eventmatter = document.createElement("div")
  const eventpdf = document.createElement("a")
  const eventmatterp = document.createElement("p");
eventsdisp.className = "eve_matter_cont";
eventname.className = "pre-head"
eventmatter.className ="pre"

eventname.innerHTML = element.name;
eventmatterp.innerHTML = element.event;
eventsimage.src = `data:image/png;base64,${base64String}`;
eventsimage.type = 'images/base64'
eventpdf.innerHTML = `Access ${element.name} pdf here`
// eventpdf.href = `data:application/pdf;base64,${base64pdf}`;
eventpdf.type = "application/pdf"

eventsdisp.appendChild(eventname);
eventsdisp.appendChild(eventsimage);
eventsdisp.appendChild(eventmatter);
eventmatter.appendChild(eventmatterp)
eventmatter.appendChild(eventpdf);

document.getElementById("events_cont").appendChild(eventsdisp);

  });
} 
events();


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
document.getElementById("options").addEventListener("click",showheader)
function showheader(){
    if(document.getElementById("options").value=="close"){
    document.getElementById("header").style.display="initial"
    document.getElementById("options").innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>'
    document.getElementById("options").value="open"
    document.getElementById("options").style.backgroundColor="transparent"
}

   else {
        document.getElementById("header").style.display="none"
        document.getElementById("options").innerHTML='<i class="fa fa-server" aria-hidden="true"></i>'
        document.getElementById("options").value="close"
        document.getElementById("options").style.backgroundColor="transparent"}
    
}
document.getElementById("selbtn16").addEventListener("click", openfaq)
function openfaq() {
    window.location.href = "/faqs.html"
}

document.getElementById("close").addEventListener("click",close)
function close(){
    document.getElementById("eve-matter-display").style.display='none'
    document.getElementById("close").style.display='none'
}

function reply_click(clicked_id)
  {
      var tar1=clicked_id;
      document.getElementById("close").style.display='initial'
      document.getElementById("eve-matter-display").style.display='initial'
     document.getElementById("eve-matter-display1").innerHTML = document.getElementById(clicked_id).innerHTML
     document.getElementById("eve-matter-display").innerHTML = document.querySelector("#eve-matter-display1 .pre").innerHTML
    
  }