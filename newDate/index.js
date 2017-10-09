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