const timer = document.getElementById('time');

var time = 0;
var inv = false;

function newTime () {
    time++;
    refresh(time);
}


function refresh (time) {
    let aaa= "";
    let ttt = time;
    let hours = String((ttt - ttt%360000)/360000);
    ttt -= Number(hours) * 360000;
    let minutes = String((ttt - ttt%6000)/6000);
    ttt -= Number(minutes) *  6000;
    let seconds = String((ttt - ttt%100)/100);
    ttt -= Number(seconds) *  100;
    let centoseconds = String(ttt);

    if (Number(hours)>0){
        aaa = hours + ":" + minutes + ":" + seconds + "." + centoseconds;
    } else {
        aaa = minutes + ":" + seconds + "." + centoseconds;
    }
    console.log("Hours: " + hours)
    console.log("Minutes: " + minutes)
    console.log("Seconds: " + seconds)
    console.log("Centoseconds: " + centoseconds)
    timer.textContent = aaa;
}

function start () {

    if (!inv){
        inv = true;
        invertal = setInterval(newTime, 10);
    }
}

function stop () {
    inv = false;
    clearInterval(invertal);
}

function reset () {

    stop ();
    time = 0;
    timer.textContent = "0:00.00";
}
