const sqrs = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let res = 0
let hitpos
let curtime = 60
let timerid = null

//method for selecting randomsquare
function randomSquare() {
  sqrs.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = sqrs[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitpos = randomSquare.id
}
//method for traversing into grid and check and increase score
sqrs.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitpos) {
      res++
      score.textContent = res
      hitpos = null
    }
  })
})

//setinterval -- call randomsquare every halfsecond
function moveMole() {
  timerid = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 curtime--
 timeleft.textContent = curtime

 if (curtime == 0) {
   clearInterval(countDowntimerid)
   clearInterval(timerid)
   alert('GAME OVER! Your final score is ' + res)
 }

}

let countDowntimerid = setInterval(countDown, 1000)

