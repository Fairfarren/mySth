const axios = require('axios')
const fs = require('fs')

function githubApi () {
  return new Promise((resolve, reject) => {
    fs.readFile('./README.md', (err, data) => {
      if (err) console.log(err)
      axios.post('https://api.github.com/markdown', {
        text: data.toString(),
        mode: 'gfm'
      }).then(async (res) => {
        console.log(res.data)
        resolve(res.data)
      }).catch(err => {
        console.log(err)
      })
    })
  })
}

module.exports = githubApi
