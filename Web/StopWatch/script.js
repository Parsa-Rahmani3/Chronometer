'user strict';
//user strict -> تعریف میکنه که کد جاوا اسکریپت باید در "حالت دقیق" اجرا شود
let s, m, h, ms;
ms = s = m = h = 0;
let displaySeconds, displayMinutes, displayHours, displayMilliseconds;
displaySeconds = displayMinutes = displayHours = displayMilliseconds = 0;
let interval = 0;
let status = "stopped";
// Let در جاوا اسکریپت برای اعلان متغیر ها استفاده می شود
function stopWatch() {
    ms++;
    //منطق (logic) برای تعیین زمان افزایش مقدار بعدی
    if (ms / 100 === 1) { //1000 ms = 1 sec
        ms = 0;
        s++;

        if (s / 60 === 1) {
            s = 0;
            m++;

            if (m / 60 === 1) {
                m = 0;
                h++;
            }
        }
    }

    //اگر ثانیه ها/دقیقه ها/ساعت ها فقط یک رقمی هستند،یک عدد اول به مقدار اضافه کنید
    displayMilliseconds = (ms < 10) ? ("0" + ms) : ms;
    displaySeconds = (s < 10) ? ("0" + s) : s;
    displayMinutes = (m < 10) ? ("0" + m) : m;
    displayHours = (h < 10) ? ("0" + h) : h;

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;
}

function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {
    clearInterval(interval);
    ms = s = m = h = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById('lapText').innerHTML = "";
    status = "stopped";
}


function lap() {
    document.getElementById('lapText').innerHTML += `<p>${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}</p>`;
}

//متد ایونت لسنر یک رویداد را به عنصر اچ تی ام ال مشخص شده متصل میکند
window.addEventListener('load', () => {
    document.getElementById('lap').addEventListener('click', lap);
    document.getElementById('startStop').addEventListener('click', startStop);
    document.getElementById('reset').addEventListener('click', reset);
});