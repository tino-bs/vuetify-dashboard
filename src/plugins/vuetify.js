import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {preset} from './vuetify-preset-mdm/preset'

Vue.use(Vuetify);

export default new Vuetify({
    preset,
});
