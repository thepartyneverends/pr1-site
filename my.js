let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");

setInterval(tick,1000)

function tick(){

 
     
    let d=new Date();
    let d1=new Date("2025-12-31");
    alert ((d1-d)/24/60/60/1000);
   
    let hours=23-d.getHours();
    if (hours<10) {
        hours="0"+hours;
    }
    let minutes=59-d.getMinutes();
    if (minutes<10){
        minutes="0"+minutes;
    }
    let seconds=59-d.getSeconds();
    if (seconds<10){
        seconds="0"+seconds;
    }
    h.innerHTML=hours+":";
    m.innerHTML=minutes+":";
    s.innerHTML=seconds;
}

const title=document.querySelector(".post-container h3")
const body =document.querySelector(".post-container span")
fetch ('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(response)
    return response.json()})
    .then(data => addPost(data[0].body))

    function addPost(t,b){
    title.innerHTML=t
    body.innerHTML=b
    }
   
    

