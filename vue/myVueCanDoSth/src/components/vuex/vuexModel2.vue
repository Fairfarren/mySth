<template>
    <div id="vuexModel2">
        <div>
            $store.commit('ageUp')，这样来触发
            <button @click="$store.commit('ageUp')">age++</button>
            <button @click="$store.commit('ageDown')">age--</button>
        </div>
        <div>
            getters的使用
            <br>
            {{helloReverse}}
            <br>
            {{nameReverse}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'vuexModel2',
    computed: {
        ...mapGetters(['helloReverse','nameReverse'])
    },
    methods: {
        
    }
}
</script>
