window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function({url, method, body, headers}){  // ES6 解构赋值
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest()
    request.open(method, url) // 配置 request
    for(let key in headers){
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined, request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get', 
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'frank': '18'
    }
  }).then(
    (responseText)=>{console.log(responseText)},
    (request)=>{console.log(request)}
  )
})

/*
myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('post', '/xxx') // 配置 request
  request.setRequestHeader('frank', '18')
  request.setRequestHeader('Content-Type', 'x-www-form-urlencoded')
  request.send('我偏要设置request第四部分')
  request.onreadystatechange = ()=>{
    console.log(request.readyState)
    if(request.readyState === 4){
      console.log('请求都响应完毕了')
      console.log(request.status)
      console.log(request.statusText)
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功')
        console.log(request.getResponseHeader('Content-Type'))
        console.log(request.getAllResponseHeaders())
        console.log(request.responseText)
        let string = request.responseText
        // 把符合 JSON 语法的字符串
        // 转换成 JS 对应的值
        let object = window.JSON.parse(string)
        // JSON.parse 是浏览器提供的
        
      }else if(request.status >= 400){
        console.log('说明请求失败')
      }

    }
  }

})
*/