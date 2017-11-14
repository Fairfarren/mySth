<style scoped lang="scss">
@mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
}
@mixin transition($time) {
    transition: all $time;
    -webkit-transition: all $time;
    -o-transition: all $time;
    -moz-transition: all $time;
}
#popup {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    background: {
        color: rgba(0,0,0, 0.5);
    }
    
}

</style>

<template>
    <div id="popup" @click.self="$store.commit('CLOSE_PUPUP')">
        <!-- 登录注册 -->
        <signInUp></signInUp>
    </div>
</template>

<script>

import SignInUp from '@/components/signInUp';

export default {

    components: {
        SignInUp
    },
    data () {
        return {

        }
    },
    mounted () {
        
    }
}
</script>