import Vue from 'vue';
import Vuex from 'vuex';

import headerTabs from './modules/headertabs';
import footerTabs from './modules/footer'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        headerTabs,
        footerTabs

    }
})