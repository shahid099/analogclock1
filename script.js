// let hour = document.getElementById('hour');
// let minute = document.getElementById('minute');
// let second = document.getElementById('second');

let hr = document.getElementById('hr');
let min = document. getElementById('min');
let sec = document.getElementById('sec');

setInterval(()=> {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    hr.style.transform = `rotateZ(${(hh*30) + (mm/2)}deg)`
    min.style.transform = `rotateZ(${(mm*6) + (ss/10)}deg)`
    sec.style.transform = `rotateZ(${(ss*6)}deg)`

});
