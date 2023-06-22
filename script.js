setInterval(() => {
    // console.log("hello Shivesh!");
    d = new Date();
    ddate = d.getDate();
    // mdate = d.getMonth();
    milli = d.getMilliseconds()
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // console.log(htime , mtime,stime);
    hr = 30*htime + mtime/2  ;
    mr = 6*mtime + stime/12 ;
    sr = 6*stime + 6*milli/1000;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
    date.innerText = ddate;
}, 1);

let clocks = document.getElementsByClassName("clock");
// let clocks = document.getElementById("clocks");
// console.log(clocks);
document.addEventListener('click', (e) =>{
    // console.log("hi");
    console.log(e.target.id);
    document.getElementById("bk").src = "clock"+(e.target.id)+".png";
})

// let bk = document.getElementById("bk");
// console.log(bk.target.src);
// console.log("j");




// Array.from(document.getElementsByClassName("clock")).forEach((element) =>{
//     console.log(element);
//     console.log("hi");
// element.addEventListener('click', () =>{
// })
// })
