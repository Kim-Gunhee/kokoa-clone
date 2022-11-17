const clock=document.querySelector(".status-bar__column .clock");


function getClock(){
    const date=new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    clock.innerText=`${hours}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock,1000);