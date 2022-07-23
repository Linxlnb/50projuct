var util = {
  ajax: function (params) {
    const xhr = new XMLHttpRequest()
    if (params.method === 'GET') {
      if (params.query) {
        params.url += '?'
        for (const key in params) {
          params.url += `${key}=${params[key]}&`
        }
        params.url = params.url.slice(0, -1)
      }
      xhr.open('GET', params.url)
      xhr.send()
    } else {
      //post
      if (params.query) {
        var str = ''
        str += '?'
        for (const key in params) {
          str += `${key}=${params[key]}&`
        }
        str = str.slice(0, -1)
      }
      xhr.open('POST', params.url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(str)
    }
    if (xhr.readystate === 4 && xhr.status == 200) {
      var res = params.isJson ? JSON.parse(xhr.responseText) : xhr.responseText
      params.callback(res)
    }
  }
}
