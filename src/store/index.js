import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 状态
  state: {
    code: '',
    phone: '',
    user: {}
  },
  // 同步改变状态
  mutations: {
    saveCode (state, data) {
      state.code = data.code
      state.phone = data.phone
    },
    saveUserInfo (state, obj) {
      state.user = obj
    }
  }
})

export default store
