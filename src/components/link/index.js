import csLink from './src/link.vue'

csLink.install = function (Vue) {
    Vue.component(csLink.name, csLink)
}

export default csLink