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
    <div id="popup" @click.self="$store.commit('CLOSE_PUPUP')" @mousewheel="stopDefault">
        <!-- 登录注册 -->
        <signInUp v-show="signInUpOrfGrM.index == 0" @forGet="goToForGet"></signInUp>
        <!-- 忘记密码，重置密码  -->
        <fGrM v-show="signInUpOrfGrM.index == 1" @signUp="goToSign"></fGrM>
        <!-- 添加手机号 -->
        <add-phone-number v-show="signInUpOrfGrM.index == 2"></add-phone-number>
        <!-- 购买课程 -->
        <pay-class v-show="signInUpOrfGrM.index == 3"></pay-class>
    </div>
</template>

<script>
// import SignInUp from '@/components/signInUp';

export default {
    components: {
        SignInUp: resolve => require(['@/components/signInUp'], resolve),
        FGrM: resolve => require(['@/components/fGrM'], resolve),
        AddPhoneNumber: resolve => require(['@/components/addPhoneNumber'], resolve),
        PayClass: resolve => require(['@/components/payClass'], resolve)
    },
    data () {
        return {
            signInUpOrfGrM: {
                index: 0
            }
        }
    },
    props: ['index'],
    methods: {
        goToForGet () {
            this.signInUpOrfGrM.index = 1;
        },
        goToSign () {
            this.signInUpOrfGrM.index = 0;
        },
        //停止默认事件
        stopDefault (e) {
            const event = event || window.event;
            event.preventDefault();
        }
    },
    mounted () {
        // this.$store.state.USER.name.length > 0 && ( () => {
        //     this.signInUpOrfGrM.index = 2;
        // })()
        this.$route.query.index && ( () => {
            this.signInUpOrfGrM.index = this.$route.query.index;
        })()
    }
}
</script>