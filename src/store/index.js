import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 状态
  state: {
    code: '',
    phone: '',
    user: {},
    // 提示框
    dialog: false,
    // 确认框
    isalert: false,
    checkIndex: '',
    sumPrice: 0.00
  },
  // 同步改变状态
  mutations: {
    saveCode (state, data) {
      state.code = data.code
      state.phone = data.phone
    },
    saveUserInfo (state, obj) {
      state.user = obj
    },
    // 模态框
    dialogshow (state, data) {
      state.dialog = data
    },
    // 确认框
    alertshow (state, data) {
      state.isalert = data
    },
    // 选中状态
    checkchoose (state, data) {
      state.checkIndex = data
    },
    // 购物车商品总价
    countprice (state, data) {
      state.sumPrice = 0
      for (var i = 0; i < data.length; i++) {
        if (+state.checkIndex[i]) {
          state.sumPrice += Number(data[i].num * data[i].pri)
        }
      }
      state.sumPrice = state.sumPrice.toFixed(2)
    }
  }
})

export default store
