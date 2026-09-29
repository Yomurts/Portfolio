const loader=document.getElementById("loader");
const status=document.getElementById("load-status");
const messages=["loading something...","finding the steel ball...","probably working...","okay we're good"];
let i=0;
const interval=setInterval(()=>{status.textContent=messages[i++%messages.length]},350);
window.addEventListener("load",()=>setTimeout(()=>{clearInterval(interval);loader.classList.add("loader-hide")},700));

const cursor=document.querySelector(".cursor-ball");
if(cursor) window.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
document.querySelectorAll("a,button").forEach(el=>{
  el.addEventListener("mouseenter",()=>{if(cursor){cursor.style.width="28px";cursor.style.height="28px"}});
  el.addEventListener("mouseleave",()=>{if(cursor){cursor.style.width="11px";cursor.style.height="11px"}});
});

// A tiny hidden internet-era easter egg.
const sequence=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let progress=0;
window.addEventListener("keydown",e=>{
  if(e.key===sequence[progress]){
    progress++;
    if(progress===sequence.length){
      document.body.classList.add("secret-mode");
      setTimeout(()=>document.body.classList.remove("secret-mode"),2200);
      progress=0;
    }
  }else progress=e.key===sequence[0]?1:0;
});

const almost=document.getElementById("almost");
if(almost) almost.addEventListener("mouseenter",()=>almost.querySelector("p").textContent="seriously. nothing here.");
