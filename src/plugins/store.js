import { reactive } from 'vue'

export const store = reactive({
  isLogin: false,
  password:"password",
  login: function () {
    this.isLogin = true
  },
  changePassword:function(param){
    this.password=param;
  }
})
