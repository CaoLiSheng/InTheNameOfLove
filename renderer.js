const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // 打印 'pong'
  const information = document.getElementById('info')
  const aHref = document.createElement('a')
  aHref.href = 'https://www.baidu.com'
  aHref.target = '_blank'
  aHref.innerText = response
  information.appendChild(document.createElement('br'))
  information.appendChild(aHref)
}

func()