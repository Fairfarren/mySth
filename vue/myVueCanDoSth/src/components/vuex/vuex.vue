<template>
    <div id="vuex">
        <h5>
            vuex的配置一般都在src下面的store文件夹内，
            <br>
            可以分为5个文件，4个状态加一个index.js
        </h5>
        <vuexModel1></vuexModel1>
        <vuexModel2></vuexModel2> 
    </div>
</template>

<script>
import VuexModel1 from '@/components/vuex/vuexModel1'
import VuexModel2 from '@/components/vuex/vuexModel2'

export default {
    components: {
        VuexModel1,VuexModel2
    },
    name: 'vuex',
    data() {
        return {

        }
    }
}
</script>

