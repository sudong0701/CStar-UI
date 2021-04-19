import '../assets/iconfont.css'
import '../assets/common.scss'
import {csContainer, csAside, csFooter, csHeader, csMain} from './container/index'
import { csRow, csCol } from './layout/index'
import csButton from './button/index'
import csLink from './link/index'
import {csRadio, csRadioGroup, csRadioButton } from './radio'
import { csCheckbox, csCheckboxGroup, csCheckboxButton } from './checkbox'
import csInput from './input'


const components = [
    csContainer,
    csAside,
    csFooter,
    csHeader,
    csMain,
    csRow,
    csCol,
    csButton,
    csLink,
    csRadio,
    csRadioGroup,
    csRadioButton,
    csCheckbox,
    csCheckboxGroup,
    csCheckboxButton,
    csInput
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
    csLink,
    csRadio,
    csRadioGroup,
    csRadioButton,
    csCheckbox,
    csCheckboxGroup,
    csCheckboxButton,
    csInput
}