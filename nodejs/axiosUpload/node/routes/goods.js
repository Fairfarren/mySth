let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Goods = require('../models/goods')

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/demo1')

//监听连接成功
mongoose.connection.on('connected', ()=>{
    console.log('success');
})
//监听连接失败
mongoose.connection.on('error', ()=>{
    console.log('error');
})
//监听连接断开
mongoose.connection.on('disconnected', ()=>{
    console.log('dis');
})

//获取路由
router.get('/',(req,res,next)=>{

    //排序
    let sort = -1;
    if( req.param('sort') ) sort = parseInt( req.param('sort'));//获取前端的传值‘sort’字段的值
    
    //分页
    let page = 1;
    if( req.param('page') ) page = parseInt( req.param('page'));//当前第几页
    let pageSize = 4;
    if( req.param('pageSize') ) pageSize = parseInt( req.param('pageSize') );//一页多少条
    let skip = (page - 1) * pageSize;

    let params = {};//定义一个查找的方法
    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);//通过这样的查找方法去定义一个模型，可以通过这个模型去做别的事。
    //skip()表示需要跳过多少条。
    //limit()表示向后查找多少条。

    goodsModel.sort({'age' : sort});//MongoDB里面全是对象，所以查找也是对象,1为升序，-1为降序

    //返回数据，成功，失败
    goodsModel.exec((err,doc)=>{//这里改为goodsModel.extc,因为前面已经拿到参数了，第一个{}也可以删掉了
        //格式自定
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        }else{
            res.json({
                status:'0',
                msg:'成功',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    });
})

//输出出去
module.exports = router;