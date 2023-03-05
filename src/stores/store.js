import { reactive,ref } from 'vue'

export const store = reactive({
  isLogin: false,
  amount: '0',
  username: ref('username'),
  password: ref('password'),
  seafood:[],
  steak:[],
  drink:[],
  pasta:[]
})
