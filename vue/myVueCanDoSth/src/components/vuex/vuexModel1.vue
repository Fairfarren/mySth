<template>
    <div id="vuexModel1">
        <div>
            全局变量hello:{{$store.state.hello}}
            <br>
            全局的age:{{$store.state.age}}
        </div>
        <div>
            循环一个全局变量
            <ul>
                <li v-for="list in $store.state.lists" :key="list">{{list}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vuexModel1'
}
</script>
