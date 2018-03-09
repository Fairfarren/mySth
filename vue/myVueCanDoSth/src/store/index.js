//基本的vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
//vuex的属性的配置文件
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

//将这个名字暴露出去，main.js才能获取到
export default store;