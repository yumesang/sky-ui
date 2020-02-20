import borderBuilder from './vue-border-builder/src/border-builder.vue'

const install = Vue => {
  Vue.component(borderBuilder.name, borderBuilder)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}