import csContainer from './src/container.vue'
import csAside from './src/aside.vue'
import csHeader from './src/header.vue'
import csMain from './src/main.vue'
import csFooter from './src/footer.vue'

csContainer.install = function (Vue) {
    Vue.component(csContainer.name, csContainer)
}

csAside.install = function (Vue) {
    Vue.component(csAside.name, csAside)
}

csHeader.install = function (Vue) {
    Vue.component(csHeader.name, csHeader)
}

csMain.install = function (Vue) {
    Vue.component(csMain.name, csMain)
}

csFooter.install = function (Vue) {
    Vue.component(csFooter.name, csFooter)
}

export {
    csContainer,
    csAside,
    csHeader,
    csMain,
    csFooter
}