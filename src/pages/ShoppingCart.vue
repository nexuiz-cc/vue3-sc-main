<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div>
    <div class="sc-title">
      <h3>Shopping Cart</h3>
      <br />
    </div>
    <div class="sc-content">
      <div></div>
    </div>
  </div>

  <a-table :columns="columns" :data-source="data" bordered :pagination="false" class="table"> </a-table>
  <a-row>
    <a-col :span="12"> </a-col>
    <a-col :span="12" class="totalPrice" v-show="totalPrice !== 0">
      <a-statistic title="合計" :precision="0" :value="totalPrice" />
    </a-col>
  </a-row>
  <VanButton class="pay" @click="showModal1" v-show="totalPrice !== 0">会計</VanButton>
  <a-modal v-model:open="open1" title="会計金額" @ok="payBill">
    <p>{{ totalPrice }}</p>
    <a-modal v-model:open="open2" footer=''>
      <a-result
        status="success"
        title="お支払い頂いて、ありがとうございます。"
        sub-title="会計番号: 2017182818828182881"
      >
      </a-result>
    </a-modal>
  </a-modal>

  <TabBar></TabBar>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import TabBar from '../components/TabBar.vue';
import 'animate.css';
import {
  getShopingCart, setMenuData, setShopingCart, getDefault,
} from '../api/api';

const seafoodList = ref([]);
const steakList = ref([]);
const drinkList = ref([]);
const sushiList = ref([]);
const pastaList = ref([]);
const price1 = ref(0);
const price2 = ref(0);
const router = useRouter();
const price3 = ref(0);
const price4 = ref(0);
const price5 = ref(0);
const open1 = ref(false);
const open2 = ref(false);
const totalPrice = ref(0);
const showModal1 = () => {
  open1.value = true;
};
const showModal2 = () => {
  open2.value = true;
  setTimeout(() => {
    open2.value = false;
  }, 3000);
  setTimeout(() => {
    router.push('/menu');
  }, 3000);
};

const columns = [
  {
    title: '商品名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
    align: 'center',
  },
  {
    title: '単価',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
  },
  {
    title: '合計',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    align: 'center',
  },
];
const data = ref([]);
const payBill = () => {
  ['seafood', 'steak', 'drink', 'pasta', 'sushi'].forEach((item) => {
    setShopingCart(item, { id: item, itemlist: [], totalPrice: 0 });
    getDefault(item).then((res) => {
      const defaultData = res.data.itemlist;
      setMenuData(item, { id: item, itemlist: defaultData });
    });
  });
  open1.value = false;
  showModal2();
};

async function fetchCartData(category, list, price) {
  try {
    const res = await getShopingCart(category);
    // eslint-disable-next-line no-param-reassign
    list.value = res.data.itemlist;
    // eslint-disable-next-line no-param-reassign
    price.value = res.data.totalPrice;
    totalPrice.value += price.value;
    data.value = data.value.concat(list.value);
  } catch (error) {
    // Handle errors here
    // eslint-disable-next-line no-console
    console.error(`Error fetching ${category} cart data:`, error);
  }
}

onMounted(async () => {
  await Promise.all([
    fetchCartData('seafood', seafoodList, price1),
    fetchCartData('steak', steakList, price2),
    fetchCartData('drink', drinkList, price3),
    fetchCartData('pasta', pastaList, price4),
    fetchCartData('sushi', sushiList, price5),
  ]);
});
</script>

<style scoped lang="scss">
.lasttd {
  position: relative;
  left: 220px;
  top: 10px;
  font-size: 15px;
  font-family: 'Meiryo UI';
}
.table {
  position: relative;
  left: 6px;
  font-size: 15px;
  font-family: 'Koruri Semibold';
  width: 96%;
}
.pay {
  width: 80%;
  position: relative;
  background-color: #569242;
  left: 40px;
  top: 50px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  font-family: 'Meiryo UI';
}
.totalPrice {
  position: relative;
  left: 50px;
  top: 10px;
}
.sc-title {
  position: relative;
  left: 20px;
  margin-top: 30px;
  font-size: 22px;
  line-height: 22px;
  font-family: 'Koruri Semibold', Courier, monospace;
}
</style>
