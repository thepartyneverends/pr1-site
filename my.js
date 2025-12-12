let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");

setInterval(tick,1000)

function tick(){
    let d=new Date();
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
