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
    let good = e.target.id;
    console.log(good);
    // console.log(e.target.id);
    if( good == 1 || good == 2 || good == 4 || good == 3 || good == 5 || good == 6 || good == 7 || good == 8 || good == 9){
        document.getElementById("bk").src = "clock"+(e.target.id)+".png";
    console.log("g");
    } else {
        console.log("hi");
    }
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
