// const e = require('cors')

const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')

//歌曲名称
const songs = ['goodbye', 'hey', 'summer']

//创建下标追踪歌曲
let songIndex = 2

//初始化页面时加载歌曲DOM节点
loadsong(songs[songIndex])

function loadsong(song) {
  title.innerHTML = song
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}
function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  audio.play()
}
function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  audio.pause()
}

function prevSong() {
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length - 1
  }
  loadsong(songs[songIndex])
  playSong()
}
function nextSong() {
  songIndex++
  if (songIndex > songs.length - 1) {
    songIndex = 0
  }
  loadsong(songs[songIndex])
  playSong()
}
function updateProgress(e) {
  // console.log(e.srcElement)
  //总时长     播放时间
  const { duration, currentTime } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  //console.log(progressPercent)
  progress.style.width = `${progressPercent}%`
}
function setProgress(e) {
  //进度条宽度
  const width = this.clientWidth
  //鼠标点击距开始的位置
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

//进度条
audio.addEventListener('timeupdate', updateProgress)

//点击进度条
progressContainer.addEventListener('click', setProgress)

//播放结束自动切换
audio.addEventListener('ended', nextSong)
