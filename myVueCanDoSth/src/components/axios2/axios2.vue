<style>

</style>

<template>
    <div id="axios2">
        <button @click="get">get</button>
        <button @click="getMore">发送多个请求</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'axios2',
    data() {
        return {

        }
    },
    methods: {
        get() {
            axios.interceptors.request.use( (config)=> {
                //在发送请求之前做某事
                config.params = {
                    name: 'l',
                    age: '10'
                }
                return config;
            },(error)=> {
                //请求错误时做些事
                return Promise.reject(error);
            })
            //添加响应拦截器
            axios.interceptors.response.use(function(response){
                //对响应数据做些事
                response = response.data;
                return response;
            },function(error){
                //请求错误时做些事
                return Promise.reject(error);
            });
            axios({
                baseURL: 'http://www.nadalive.cn',
                url: 'nacx/user_collections/',
                methods: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then( (req)=>{
                console.log(req);
            }).catch( (err)=>{
                console.log(err);
            })
        },
        getMore() {
            axios.all([ this.getGoods(), this.getUser()])
            .then( res=>{
                console.log(res);
            })
            .catch( err=>{
                console.log(err)
            })
        },
        getGoods() {
            return axios({
                url: '/goods'
            })
        },
        getUser() {
            return axios({
                baseURL: 'http://www.nadalive.cn',
                url: 'nacx/user_collections/'
            })
        }
    }
}
</script>
