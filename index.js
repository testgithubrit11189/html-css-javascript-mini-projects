document.addEventListener("DOMContentLoaded",()=>{
const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

startbtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startbtn.disabled=true;
    stopbtn.disabled=false;
});

stopbtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);  
    document.removeEventListener("keyup", handleUp);
    logdiv.textContent = "";
    statediv.textContent = "";

    stopbtn.disabled=true;
    startbtn.disabled=false;
});

function handleDown(e) {
    console.log(`Key ${e.key} pressed down`);
    logdiv.textContent = `Key ${e.key} pressed down`;  
    statediv.textContent = "Key is pressed down";
}

function handleUp(e) {
    logdiv.textContent = `Key ${e.key} pressed up`; 
    statediv.textContent = "Key is pressed up";
}
});