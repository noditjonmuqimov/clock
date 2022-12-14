const hour = document.querySelector(".h"),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

// new Date() - bu Global object bo'lib u vaqtni komputerimizdan oladi.
// getSeconds-  bu secundni olib beradi
// getMinutes -  bu minutni olib beradi
// getHours -  bu soat olib beradi


function clock() {
    let date = new Date(),
        secArr = date.getSeconds() * 6,
        minArr = date.getMinutes() * 6,
        hourArr = date.getHours() * 30

    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000);

    hourNum.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    minNum.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
tabContent = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener("click", function (){
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove("active")
            tabContent[j].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        tabContent[i].classList.add("active")
    })
}
// uyga

const stopwatchHours = document.querySelector('.stopwatch__hours')
const stopwatchMinutes = document.querySelector('.stopwatch__minutes')
const stopwatchSeconds = document.querySelector('.stopwatch__seconds')
const stopwatchBtn = document.querySelector(".stopwatch__btn")
// const tabsLink = document.querySelector ('.tabsLink')


// let sHour = 0,
    // sMin = 0,
    // sSec = 0

stopwatchBtn.addEventListener('click', () =>{
    if (stopwatchBtn.innerHTML == 'start') {
        stopwatchBtn.innerHTML = 'stop'
        slock()
    }else if(stopwatchBtn.innerHTML == 'stop'){   
        stopwatchBtn.innerHTML = 'clear'
    }else if (stopwatchBtn.innerHTML == 'clear') {
        stopwatchBtn.innerHTML = 'start'
        stopwatchSeconds.innerHTML = 0 ;
        stopwatchMinutes.innerHTML = 0 ;
        stopwatchHours.innerHTML = 0 ;
    }
    function slock() {
    if(stopwatchBtn.innerHTML == 'stop'){
        setTimeout(() => {
            stopwatchSeconds.innerHTML++
            if (stopwatchSeconds.innerHTML > 59) {
                stopwatchSeconds.innerHTML = 0;
                stopwatchMinutes.innerHTML++ ;
            }else if (stopwatchMinutes.innerHTML > 59) {
                stopwatchMinutes.innerHTML = 0;
                stopwatchHours.innerHTML++ ;
            } 
        slock()
      },1);    
    }
    }
    slock()
})

// const tabsLink__span = document.querySelector('.tabsLink__span')

// for (let a = 0; a < tabsLink__span.length; a++) {
//     tabsLink__span[a].addEventListener("click", function () {
        
//     })
    
// }


