<template>
    <div id="location">
        <div>
            <select name="bigCity" v-model="bigCityName" @change="chosie">
                <option v-for="(name, index) in location" :key="name.bigCity" :value="index">
                    {{name.bigCity}}
                </option>
            </select>
            <select name="bigCity" v-model="smallCity">
                <option v-for="(name, index) in location[bigCityName].list" :key="index" :value="name">
                    {{name}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'location',
    data () {
        return {
            location: [
                {bigCity: '', list: []}
            ],
            bigCityName: '0',
            smallCity: '北京'
        }
    },
    methods: {
        getLocation () {
            axios.get('/static/location.json').then( (data) => {
                let arr = data.data.result;
                let newArr = [];
                let bigCityArr = {};
                for(let i in arr) {
                    if(arr[i].area_1 == '马来西亚' || arr[i].area_1 == '韩国' || arr[i].area_1 == '新加坡' || arr[i].area_1 == '泰国' || arr[i].area_1 == '美国' || arr[i].area_1 == '阿拉伯联合酋长国' || arr[i].area_1 == '日本' || arr[i].area_1 == '澳大利亚' || arr[i].area_1 == '英国' || arr[i].area_1 == '德国' || arr[i].area_1 == '俄罗斯' || arr[i].area_1 == '法国' || arr[i].area_1 == '加拿大' || arr[i].area_1 == '越南' || arr[i].area_1 == '香港' || arr[i].area_1 == '澳门') continue;
                    if(!bigCityArr[arr[i].area_1]) {
                        bigCityArr[arr[i].area_1] = { bigCity:arr[i].area_1, list:[] };
                        bigCityArr[arr[i].area_1].list.push(arr[i].citynm);
                    }else {
                        bigCityArr[arr[i].area_1].list.push(arr[i].citynm);
                    }
                }
                let newBigCity = [];
                let index = 0;
                for(let i in bigCityArr) {
                    newBigCity[index] = bigCityArr[i];
                    index++;
                }
                this.location = newBigCity;
                console.log(JSON.stringify(newBigCity));
            })
        },
        chosie () {
            this.smallCity = this.location[this.bigCityName].list[0]
        }
    },
    mounted () {
        this.getLocation();
    }
}
</script>
