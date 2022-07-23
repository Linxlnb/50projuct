const text = document.querySelector('.text')
const speede = document.querySelector('#speed')
const str = '赵涵琪！'
let count = 1
let speed = 300 / speede.value

writeText()

function writeText() {
  text.innerHTML = str.slice(0, count)

  count++

  if (count > str.length) {
    count = 1
  }

  setTimeout(writeText, speed)
}
speede.addEventListener('input', (e) => {
  speed = 300 / e.target.value
  console.log(e)
})
