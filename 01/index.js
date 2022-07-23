var pics = document.querySelectorAll('.pic')
/* for (var i = 0; i < pics.length; i++) {
  pics[i].onclick = () => {
    // console.log(11)
    for (var i = 0; i < pics.length; i++) {
      pics[i].classList.remove('active')
    }
    this.classList.add('active')
  }
} */
pics.forEach((pic) => {
  pic.addEventListener('click', () => {
    pics.forEach((pic) => {
      pic.classList.remove('active')
    })
    pic.classList.add('active')
  })
})
