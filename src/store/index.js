import Vue from 'vue'
import Vuex from 'vuex'
import approvals from './modules/approvals';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      approvals
  }
})
