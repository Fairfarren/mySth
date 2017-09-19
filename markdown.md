<!-- h1标题和h2标题 -->
A First Level Header
====================
A Second Level Header
---------------------

<!-- 没有换行表示要连续 -->
Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

<!-- 换行 -->
The quick brown fox jumped over the lazy
dog's back.
<!-- h3标题 -->
### Header 3

<!-- >左边有一个竖线的框 -->
> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

<!-- 一个*号抱起来表示斜体 -->
Some of these words *are emphasized*.

<!-- 斜体耶可以用_下划线代替 -->
Some of these words _are emphasized also_.

<!-- 两个星号表示加粗 -->
Use two asterisks for **strong emphasis**.

<!-- 当然也可以用两个下划线 -->
Or, if you prefer, __use two underscores instead__.

<!-- 无序列表，也可以用*号，+号，-号 -->
- Candy.
* Gum.
+ Booze.
- Gaga.


<!-- 有序列表直接用数字就行，数组不需要有序号 -->
1. hello world.
1. hello liu.
1. hello yanke.


1. hello html.
2. hello css.
3. hello javascript.

<!-- 前面加可以个空格表示和其他文字对齐 -->
* A list item.

 With multiple paragraphs.

* Another item in the list.

<!-- 超链接，前面一个【 】是 a标签现实的东西，后面的（ ）是地址，空格加引号，代表a标签的title-->
This is an [谷歌](http://www.google.com/ "i love google").

<!-- 分段式超链接，第二个【 】里面是一个变量名字，变量在后面声明地址和title，是全局模式 -->
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][qwe].



1. 123.
123. 123





<!-- 加载图片，！代表图片碎了现实内容 -->
![alt text](../6.jpg "Title")

![alt text][id]

<!-- ``这个符号可以标记成代一个区域的代码 -->
I strongly recommend against using any `<blink>` tags.

I wish SmartyPants used named entities like `&mdash;`
instead of decimal-encoded entites like `&#8212;`.

<!-- < 和 >还有 & 内的东西会自动识别成html代码 -->
If you want your page to validate under XHTML 1.0 Strict,
you've got to put paragraph tags in your blockquotes:

<blockquote>
<p>For example.</p>
</blockquote>

<!-- 邮箱地址 -->
<ykwowlol@gmail.com>

<!-- 反斜杠和html一样做反编译 -->
\*literal asterisks\*

```
         asdf
这是一段什么鬼
                      自由格式？
                      #大概是吧
```

```javascript
const qwe = {
  q:0,
  w:1,
  e:2
}

let fuc = (...a)=>{
  let num = 0;
  for(let i of a){
    num += i;
		console.log(a);
  }
  return console.log(num);
}

fuc(...[1,2,3]);
```

```css

body{
  width: 100%;
  font-size: 16px;
}

```

```html
  <div>
    <ul>
      <li>
        <p>
          <a href="https://www.google.com">google</a>
        </p>
      </li>
    </ul>
  </div>
  <div class="hello">
    hello world 123
  </div>
```

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[qwe]: http://search.msn.com/ "MSN Search"
[id]: WechatIMG8.jpeg "Title"
