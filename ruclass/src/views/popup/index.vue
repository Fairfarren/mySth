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
        <signInUp v-show="signInUpOrfGrM.index == 0" @forGet="goToForGet"></signInUp>
        <!-- 忘记密码，重置密码  -->
        <fGrM v-show="signInUpOrfGrM.index == 1" @signUp="goToSign"></fGrM>
    </div>
</template>

<script>

// import SignInUp from '@/components/signInUp';

export default {
    components: {
        SignInUp: resolve => require(['@/components/signInUp'], resolve),
        FGrM: resolve => require(['@/components/fGrM'], resolve)
    },
    data () {
        return {
            signInUpOrfGrM: {
                index: 0
            }
        }
    },
    methods: {
        goToForGet () {
            this.signInUpOrfGrM.index = 1;
        },
        goToSign () {
            this.signInUpOrfGrM.index = 0;
        }
    },
    mounted () {
        
    }
}
</script>