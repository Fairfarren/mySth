# AnimatedText

## 目前已有的功能

1.  添加字数的时间
2.  删除字数的时间
3.  多行字
4.  是否再次执行

## 示例

```html
<template>
  <fairfarrenAnimatedText :text="text" :addTime="100" :deleteTime="50" :again="true" textClass="animatedStyle"/>
</template>

<script>
  export default {
  data () {
    return {
      text: [
        'hello hello hellohellohellohello',
        'worldworldworldworldworldworldworld',
        '你好世界！你好世界！你好世界！你好世界！你好世界！',
        '世界说：为了生活！'
      ]
    }
  }
}
</script>
```

## API

> `text`必须为Array
>
> `addTime`和`deleteTime`需要为Nummber
>
> `textClass`可以给字体添加class类名。**注意：**`<style>`标签内的`scoped`属性。

|     参数     |     说明     |    类型   | 可选值 |  默认值  |
| :--------: | :--------: | :-----: | :-: | :---: |
|    text    |   需要输入的文字  |  Array  |  -  |   -   |
|   addTime  |  输入每个字的时间  |  Number |  -  |  100  |
| deleteTime |  删除每个字的时间  |  Number |  -  |   50  |
|    again   | 输入完后是否从头再来 | Boolean |  -  | false |
|  textClass | 文字的class类名 |  String |  -  |   -   |
