const btns = document.querySelector('#btn')
const boxes = document.querySelector('#boxes')
btns.addEventListener('click', function () {
  boxes.classList.toggle('big')
})

function createBox() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxes.appendChild(box)
    }
  }
}
createBox()
