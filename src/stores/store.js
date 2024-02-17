import { reactive, ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const store = reactive({
  isLogin: false,
  username: ref('username'),
  password: ref('password'),
  seafoodList: [{
    id: 0, name: 'item1', singlePrice: 2200, amount: 0, price: 0,
  }, {
    id: 1, name: 'item2', singlePrice: 2200, amount: 0, price: 0,
  }],
  steakList: [],
  drinkList: [],
  pastaList: [],
  totalPrice: 0,
});
