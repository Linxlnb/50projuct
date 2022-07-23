/* const url = require('url')
const urlString =
  'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
const parsedStr = url.parse(urlString, true) */
const myUrl = new URL('/one', 'http://127.0.0.1:3000')
console.log(myUrl)
