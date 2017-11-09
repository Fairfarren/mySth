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
    #rightPhone {
        position: fixed;
        right: 0;
        top: 45%;
        z-index: 999;
        >ul {
            position: relative;
            >li {
                height: 117px;
                position: absolute;
                right: 0;
                @include transition(0.3s);
            }
            >li:first-child {
                width: 238px;
                background: {
                    image: url('../../static/images/8.png');
                    position: left center;
                    repeat: no-repeat;
                }
                right: -149px;
                top: 0;
                >p {
                    text-align: right;
                    line-height: 117px;
                    padding: {
                        right: 15px;
                    }
                    @include fontSize(18px, #666666);
                }
                &:hover {
                    right: 0;
                    background: {
                        image: url('../../static/images/8-hover.png');
                    }
                }
            }
            >li:last-child {
                width: 117px;
                right: -28px;
                top: 90px;
                cursor: pointer;
                background: {
                    image: url('../../static/images/9.png');
                    position: right center;
                    repeat: no-repeat;
                }
                &:hover {
                    background: {
                        image: url('../../static/images/9-hover.png');
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="rightPhone">
        <ul>
            <li>
                <!-- <img src="static/images/8.png" alt=""> -->
                <p>400-990-6556</p>
            </li>
            <li
                @click="scroll"
            >
                <!-- <img src="static/images/9.png" alt=""> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'rightPhone',
    methods: {
        scroll () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            // console.log(scrollTop / 10);
            const timer = setInterval( () => {
                scrollTop -= scrollTop / 15;
                document.body.scrollTop = scrollTop;
                document.documentElement.scrollTop = scrollTop;
                window.pageYOffset = scrollTop;
                if( scrollTop < 10 ) {
                    clearInterval(timer);
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    window.pageYOffset = 0;
                }
            },10)
            
        }
    }
}
</script>