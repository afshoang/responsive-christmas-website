const btnOpenNav = document.querySelector('.header__nav__open')
const btnCloseNav = document.querySelector('.nav__close')
const nav = document.querySelector('.nav__container')
const time = document.querySelector('#time-to-christmas')

btnOpenNav.addEventListener('click', () => {
    nav.classList.add('active')
})

btnCloseNav.addEventListener('click', () => {
    nav.classList.remove('active')
})

const currentDay = new Date()
const christmasDay = new Date(currentDay.getFullYear(), 11, 25)

const timeToChristmas = christmasDay.getTime() - currentDay.getTime() // time in milisecont
const dayToChristmas = Math.floor(timeToChristmas / (24 * 60 * 60 * 1000)); // convert milisecond to day

if (time !== 0) {
    time.innerHTML = dayToChristmas
}
