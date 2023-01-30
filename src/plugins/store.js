import { reactive } from 'vue'

export const store = reactive({
  isLogin: false,
  Username:'username',
  tableNumber:'053',
  amount:'4',
  num1:0,
  num2:0,
  num3:0,
  num4:0,
  price1:2200,
  price2:2230,
  price3:1300,
  price4:1540,
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
