let express = require('express');
let router = express();
let fs = require('fs');



//获取路由
router.post('/',(req,res,next)=>{
    //接收前台POST过来的base64
    var imgData = req.body.hello;
    console.log(imgData);
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    let timeData = new Date();
    let time = timeData.getSeconds();
    fs.writeFile(`${time}.png`, dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send("保存成功！");
        }
    });
})
    
//输出出去
module.exports = router;