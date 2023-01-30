import { reactive } from 'vue'

export const store = reactive({
  isLogin: false,
  Username:'username',
  tableNumber:'053',
  amount:'4',
  Password:"password",
  login: function () {
    this.isLogin = true
  },
  changePassword:function(param){
    this.password=param.value;
  },
  changeUsername:function(param){
    this.Username=param.value;
  }
})
