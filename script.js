const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let timeDifference;

const countdown = () => {
    const targetDate = new Date(2022, 11, 25, 0).getTime()
    const currentDate = new Date().getTime()

    timeDifference = targetDate - currentDate

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const daysLeft = Math.floor(timeDifference / day)
    const hoursLeft = Math.floor((timeDifference % day) / hour)
    const minutesLeft = Math.floor((timeDifference % hour) / minute)
    const secondsLeft = Math.floor((timeDifference % minute) / second)

    days.innerText = daysLeft
    hours.innerText = hoursLeft
    minutes.innerText = minutesLeft
    seconds.innerText = secondsLeft
}

const countdownInterval = setInterval(function () {

    countdown()
    
    if (timeDifference <= 0){
        clearInterval(countdownInterval)
    }

}, 1000)


