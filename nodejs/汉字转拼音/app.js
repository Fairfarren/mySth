const pinyin = require('pinyin')

const fs = require('fs')

fs.readFile('dog.json', (err, data) => {
    const arr = JSON.parse(data.toString())
    let newArr = []
    arr.forEach(item => {
        let name = pinyin(item.varieties, {
            heteronym: true, // 启用多音字模式
            segment: true,
            style: pinyin.STYLE_NORMAL // 设置拼音风格
        })
        newArr.push({
            name: name.join(''),
            ...item
        })
    })
    console.log(newArr)
    fs.writeFile('newDog.json', JSON.stringify(newArr), (err) => {
        if (err) console.log(err)
        console.log('以保存')
    })
})
