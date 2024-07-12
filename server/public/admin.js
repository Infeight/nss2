// document.body.style.backgroundColor = "red"

const events = async()=>{
    const data = await fetch('http://localhost:5001/events');
  const pdfdata = await fetch('http://localhost:5001/eventpdf');
  const upevents = await fetch('http://localhost:5001/upevents');
  const experience = await fetch ('http://localhost:5001/experience')
  
  const allevents = await data.json()
  const allpdfs = await pdfdata.json()
  const allupevents = await upevents.json()
  const allexperience = await experience.json()

  console.log(allevents)

  allevents.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.name
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deleteeve)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
    alleventdisp.appendChild(eventname)
    alleventdisp.appendChild(delbtn)

    document.getElementById("eventsdisp").append(alleventdisp)
    
  });

  allpdfs.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.name
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deletepdf)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
    alleventdisp.appendChild(eventname)
    alleventdisp.appendChild(delbtn)

    document.getElementById("pdfdisp").append(alleventdisp)
    
  });

  allupevents.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.Title
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deleteupeve)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
    alleventdisp.appendChild(eventname)
    alleventdisp.appendChild(delbtn)

    document.getElementById("upeve").append(alleventdisp)
    
  });

  allexperience.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const name = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.Exp.slice(0,35)+"..."
    eventname.style.maxWidth = "60%"
    name.innerText = element.Name.slice(0,16)
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deleteexp)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
   name.className = "stuname"
  
    alleventdisp.appendChild(eventname)

    alleventdisp.appendChild(delbtn)
    alleventdisp.appendChild(name)
    document.getElementById("experience").append(alleventdisp)
    
  });
}
events()

const deleteeve = async(e)=>{

const detail=   {name: e.target.closest('.alleventdisp').querySelector(".eventname").innerText}
  e.target.closest('.alleventdisp').style.backgroundColor = "red"
   await fetch ('http://localhost:5001/deleteevent',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
}
const deletepdf = async(e)=>{
  e.target.closest('.alleventdisp').style.backgroundColor = "red"
  const detail=   {name: e.target.closest('.alleventdisp').querySelector(".eventname").innerText}
  
     await fetch ('http://localhost:5001/deletepdf',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
  }

  const deleteupeve = async(e)=>{
    e.target.closest('.alleventdisp').style.backgroundColor = "red"
    const detail=   {Title: e.target.closest('.alleventdisp').querySelector(".eventname").innerText}
    
       await fetch ('http://localhost:5001/deleteupevent',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
    }

    const deleteexp = async(e)=>{
      e.target.closest('.alleventdisp').style.backgroundColor = "red"
      const detail=   {Name: e.target.closest('.alleventdisp').querySelector(".stuname").innerText}
      
         await fetch ('http://localhost:5001/deleteexp',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
      }


    //   document.querySelector('#eventpic').addEventListener('change', function(){
    //     var reader = new FileReader();
    //     reader.onload = function(){
    //         var arrayBuffer = this.result;
    //       // console.log(arrayBuffer);
    //         document.querySelector('#eventupload').innerHTML = arrayBuffer ;
    //         }
    //     reader.readAsArrayBuffer(this.files[0]);
    //   }, false);

      
    //   document.querySelector('#eventpdf').addEventListener('change', function(){
    //     var reader = new FileReader();
    //     reader.onload = function(){
    //         var arrayBuffer = this.result;
    //       // console.log(arrayBuffer);
    //         document.querySelector('#eventpdfupload').innerHTML = arrayBuffer ;
    //         }
    //     reader.readAsArrayBuffer(this.files[0]);
    //   }, false);

      
    //   document.querySelector('#upeveimg').addEventListener('change', function(){
    //     // var reader = new FileReader();
    //     // reader.readAsArrayBuffer(this.files[0]);
    //     // reader.onload = function() {
    //     //   var arrayBuffer = reader.result
    //     //   console.log(arrayBuffer)
    //     //   // var bytes = new Uint8Array(arrayBuffer);
    //     //   document.querySelector('#upeventupload').innerHTML = arrayBuffer 
          
    //     //   // console.log(bytes)
    //     // }
    //        document.querySelector('#upeventupload').innerHTML = this.files[0] 
    //   });
     
      




    // const submitevent = async()=>{
    
    //   const eventdata={
    //      name: document.getElementById("eventname").value,
    //      event:document.getElementById("eventdes").value,
    //      image:document.getElementById("eventupload").innerHTML
    //   }
      
    //   console.log(eventdata)

    //   // await fetch ('http://localhost:5001/uploadimg',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(eventdata)})
    // }
    // const submitpdf = async()=>{
    
    //   const eventdata={
    //      name: document.getElementById("eventpdfname").value,
        
    //      pdf:document.getElementById("eventpdfupload").innerHTML
    //   }

    //   await fetch ('http://localhost:5001/uploadpdf',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(eventdata)})
    // }
    // const submitupevent = async()=>{
    
    //   const eventdata={
    //      Event: document.getElementById("upevedes").value,
    //      Title:document.getElementById("upevename").value,
    //      Image:document.getElementById("upeventupload").innerHTML,
    //      Date:document.getElementById("upevedate").value
    //   }

    //   await fetch ('http://localhost:5001/upevents',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(eventdata)})
    // }

    // document.getElementById("submitevent").addEventListener("click",submitevent)
    // document.getElementById("submitpdf").addEventListener("click",submitpdf)
    // document.getElementById("upevesubmit").addEventListener("click",submitupevent)