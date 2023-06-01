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