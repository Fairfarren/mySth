<style scoped>
    .scroll>li{
        height: 300px;
        border: 1px solid black;
    }
</style>


<template>
    <div id="vueScroll">
        <ul class="scroll">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
            {{loading}}
        </div>
    </div>
</template>

<script>
export default {
    name : 'vueScroll',
    data() {
        return {
            data: [],
            busy: false,
            loading: '123'
        }
    },
    methods : {
        loadMore: function() {
            this.busy = true;
            this.loading = '加载中';
            console.log(1)
            setTimeout(() => {
                this.loading = '加载完'
                this.busy = false;
            }, 1000);
        }
    }
}
</script>

