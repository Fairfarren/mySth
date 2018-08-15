var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');


// URL 使用URL生成对应的PDF
fs.readFile('./build/index.html', (err, data) => {
    if (err) console.log(err)
    wkhtmltopdf(data.toString())
      .pipe(fs.createWriteStream('./build/index.pdf'))
})
