import { reactive } from 'vue'

export let store = reactive({
  data:{},
  isLogin: false,
  Username:'username',
  tableNumber:'053',
  amount:'4',
  num1:0,
  num2:0,
  num3:0,
  num4:0,
  price1:2200,
  price2:5500,
  price3:1300,
  price4:280,
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
