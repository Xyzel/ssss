const countdownEls={days:document.getElementById("days"),hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")};
function nextBirthday(){
  const now=new Date();
  let target=new Date(now.getFullYear(),9,2,0,0,0);
  if(target<=now) target=new Date(now.getFullYear()+1,9,2,0,0,0);
  return target;
}
function updateCountdown(){
  const diff=nextBirthday()-new Date();
  const s=Math.max(0,Math.floor(diff/1000));
  countdownEls.days.textContent=String(Math.floor(s/86400)).padStart(2,"0");
  countdownEls.hours.textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");
  countdownEls.minutes.textContent=String(Math.floor(s%3600/60)).padStart(2,"0");
  countdownEls.seconds.textContent=String(s%60).padStart(2,"0");
}
setInterval(updateCountdown,1000); updateCountdown();

function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}

const heartBox=document.querySelector(".hearts");
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart"; h.textContent=["♥","♡","❤"][Math.floor(Math.random()*3)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*22)+"px";
  h.style.animationDuration=(6+Math.random()*6)+"s";
  heartBox.appendChild(h);
  setTimeout(()=>h.remove(),13000);
},700);

function makeConfetti(){
  for(let i=0;i<90;i++){
    const c=document.createElement("span");
    c.textContent=["♥","✦","♡","✨"][Math.floor(Math.random()*4)];
    c.style.position="fixed"; c.style.left="50%"; c.style.top="55%"; c.style.zIndex=99;
    c.style.fontSize=(12+Math.random()*20)+"px"; c.style.pointerEvents="none";
    const x=(Math.random()-.5)*window.innerWidth*1.2, y=(Math.random()-.7)*window.innerHeight;
    c.animate([{transform:"translate(-50%,-50%) scale(.4)",opacity:1},{transform:`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${Math.random()*700-350}deg)`,opacity:0}],{duration:1300+Math.random()*900,easing:"cubic-bezier(.2,.8,.2,1)"});
    document.body.appendChild(c); setTimeout(()=>c.remove(),2300);
  }
}
