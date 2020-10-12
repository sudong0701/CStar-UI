import csCheckbox from './src/checkbox.vue'

import csCheckboxGroup from './src/checkboxGroup.vue'

import csCheckboxButton from './src/checkboxButton.vue'

csCheckbox.install = function (Vue) {
    Vue.component(csCheckbox.name, csCheckbox)
}

csCheckboxGroup.install = function (Vue) {
    Vue.component(csCheckboxGroup.name, csCheckboxGroup)
}

csCheckboxButton.install = function (Vue) {
    Vue.component(csCheckboxButton.name, csCheckboxButton)
}

export { csCheckbox, csCheckboxGroup, csCheckboxButton}