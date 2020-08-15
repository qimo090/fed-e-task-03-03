const express = require('express')
const fs = require('fs')
const tempalte = require('art-template')
const app = express()

app.get('/', (req, res) => {
  // 1. 得到模板内容
  const templateStr = fs.readFileSync('./index.html', 'utf-8')
  // console.log('templateStr =>', templateStr)
  
  // 2. 得到数据
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
  // console.log('data =>', data)

  // 3. 渲染：数据 + 模板 = 渲染结果
  const html = tempalte.render(templateStr, data)
  // console.log('html =>', html)
  
  // 4. 把渲染结果返回给客户端
  res.send(html)
})

app.listen(3000, () => console.log('running ...'))