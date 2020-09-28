import csRow from './src/row.vue'
import csCol from './src/col.vue'

csRow.install = function (Vue) {
    Vue.component(csRow.name, csRow)
}

csCol.install = function (Vue) {
    Vue.component(csCol.name, csCol)
}


export {
    csRow,
    csCol
}