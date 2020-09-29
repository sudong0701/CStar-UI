import '../assets/iconfont.css'
import {csContainer, csAside, csFooter, csHeader, csMain} from './container/index'
import { csRow, csCol } from './layout/index'
import csButton from './button/index'
import csLink from './link/index'

const components = [
    csContainer,
    csAside,
    csFooter,
    csHeader,
    csMain,
    csRow,
    csCol,
    csButton,
    csLink
]

const install = function (Vue, options) {
    if (install.installed) return
    components.map((component)=> {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    csContainer,
    csAside,
    csFooter,
    csHeader,
    csMain,
    csRow,
    csCol,
    csButton,
    csLink
}