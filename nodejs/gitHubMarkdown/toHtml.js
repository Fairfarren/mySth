const fs = require('fs')
const github = require('./githubApi')

/**
 * 生成html
 */

async function setHtml () {
  const html = await github()
  if (!fs.existsSync('build')) {
    await fs.mkdirSync('build')
  }
  fs.writeFile('./build/index.html',
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="https://haruue.moe/md_github.css">
</head>
<body>
<div class='markdown-body entry-content'>
  ${html}
</div>
</body>
</html>
`, (err) => {
    if (err) console.log(err)
    console.log('文件已保存' + new Date())
  })
}

setHtml()
