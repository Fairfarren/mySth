var mongoose = require('mongoose');
//获取mongoose的Schema对象
var Schema = mongoose.Schema;

//定义一个模型,下面是数据格式，需要根据这个来定义

var parsensSchema = new Schema({
    "name":String,
    "age":Number
});

//输出出去
//(名字，模型，集合)
module.exports = mongoose.model('Good',parsensSchema)