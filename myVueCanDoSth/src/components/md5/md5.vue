<template>
    <div id="md5">
        <p>{{text}}</p>
        <p>{{ text | goMd5 }}</p>
        <p>
            {{'17708110844' | goMd5}}
        </p>
        <p>
            这里用的是过滤器，把需要加密的数据传过去，对原数据不污染
        </p>
    </div>
</template>

<script>
import md5 from 'md5'
export default {
    name: 'md5',
    data () {
        return {
            text: 'hello wold'
        }
    },
    filters: {
        goMd5 (value) {
            let text = `${value}jet_cloud2020`
            text = md5(text).toUpperCase();
            return text
        }
    }
}
</script>