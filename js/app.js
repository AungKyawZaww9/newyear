const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentyear = new Date().getFullYear();
// console.log(currentyear);

const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
// console.log(newyeartime);

year.innerText = currentyear + 1;

function updatecountdown(){
    const currentime = new Date();

    const diff = newyeartime - currentime;
    // console.log(diff);

    const d = Math.floor(diff/1000/60/60/24);
    // console.log(d);

    const h = Math.floor(diff/1000/60/60) % 24;
    // console.log(h);

    const m = Math.floor(diff/1000/60) % 60;
    // console.log(m);

    const s = Math.floor(diff/1000) % 60;
    // console.log(s);

    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}

setTimeout(()=>{
    countdown.style.display = "flex";
    loading.style.display = "none";
},1000)

updatecountdown();
setInterval(updatecountdown,1000);
