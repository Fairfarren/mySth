const fs = require('fs')
const github = require('./githubApi')

/**
 * 生成vue
 */
async function setHtml () {
  const html = await github()
  if (!fs.existsSync('build')) {
    await fs.mkdirSync('build')
  }
  fs.writeFile('./build/index.vue',
`<template>
<div class='markdown-body entry-content'>
    ${html}
</div>
</template>

<script>
export default {

}
</script>
`, (err) => {
      if (err) throw err;
      console.log('文件已保存' + new Date());
    });
}

setHtml()
