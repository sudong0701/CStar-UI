import csRadio from './src/radio.vue'

import csRadioGroup from './src/radioGroup.vue'

import csRadioButton from './src/radioButton.vue'

csRadio.install = function (Vue) {
    Vue.component(csRadio.name, csRadio)
}

csRadioGroup.install = function (Vue) {
    Vue.component(csRadioGroup.name, csRadioGroup)
}

csRadioButton.install = function (Vue) {
    Vue.component(csRadioButton.name, csRadioButton)
}

export {csRadio, csRadioGroup, csRadioButton }