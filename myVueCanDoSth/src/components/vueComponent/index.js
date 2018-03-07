import vueComponent from './vueComponent.vue'

const theVueComponent = {
  install (Vue) {
    Vue.component('vueComponent', vueComponent)
  }
}

export default theVueComponent
