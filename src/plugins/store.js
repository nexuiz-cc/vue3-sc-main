import { reactive } from 'vue'

export const store = reactive({
  isLogin: false,
  login: function () {
    this.isLogin = true
  },
})
