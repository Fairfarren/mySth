let date = new Date();

//日期格式方式
console.log(`日期格式方式如下,let date = new Date()`);

console.log(`date.toDateString() = ${date.toDateString()}`);

console.log(`date.toTimeString() = ${date.toTimeString()}`);

console.log(`date.toLocaleDateString() = ${date.toLocaleDateString()}`);

console.log(`date.toLocaleTimeString() = ${date.toLocaleTimeString()}`);

console.log(`date.toUTCString() = ${date.toUTCString()}`);

console.log(`/end`);  


console.log(`
常用的方法，let date = new Date();

	获取年份 getFullYear() ： ${date.getFullYear()};

	获取月份 0开始计算 getMonth() : ${date.getMonth()};

	获取天数 1-31 getDate() : ${date.getDate()};

	获取星期 0-6 getDay() : ${date.getDay()};

	获取小时 0-23 getHours() : ${date.getHours()};

	获取秒速 0-59 getSeconds() : ${date.getSeconds()};
	
	`)


console.log(`
倒计时方法：

setInterval(function(){
     // document.body.innerHTML = getTimes(2017,11,29,16,58,10)
     console.log( getTimes(2017,11,29,16,58,10));
},1000)

function getTimes(year,month,day,hour,minute,secends){
    var times = new Date(year,month-1,day,hour,minute,secends) - new Date();
    var dd = parseInt(times/1000/60/60/24,10);
    var hh = parseInt(times/1000/60/60%24,10);
    var mm = parseInt(times/1000/60%60,10);
    var ss = parseInt(times/1000%60,10)
    // console.log(hh,mm,ss);
    var ssTime = "" + ss;
    if(ss<10){
        ssTime = "0"+ss;
    }
    ss = ssTime;
    return "距"+year+"离"+month+"年"+day+"月"+hour+"日，还有"+dd+"日"+hh+"时"+mm+"分"+ss+"秒";

}
	`)

setInterval(function(){
     // document.body.innerHTML = getTimes(2017,11,29,16,58,10)
     console.log( getTimes(2017,11,29,16,58,10));
},1000)

function getTimes(year,month,day,hour,minute,secends){
    var times = new Date(year,month-1,day,hour,minute,secends) - new Date();
    var dd = parseInt(times/1000/60/60/24,10);
    var hh = parseInt(times/1000/60/60%24,10);
    var mm = parseInt(times/1000/60%60,10);
    var ss = parseInt(times/1000%60,10)
    // console.log(hh,mm,ss);
    var ssTime = "" + ss;
    if(ss<10){
        ssTime = "0"+ss;
    }
    ss = ssTime;
    return "距"+year+"离"+month+"年"+day+"月"+hour+"日，还有"+dd+"日"+hh+"时"+mm+"分"+ss+"秒";

}