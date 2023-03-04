<template>
  <div class="icon">
   
    <h4 class="info">Table {{ tableNumber }}</h4>
    <select v-model="selected" class="amount" @change="amChange()">
      <option disabled value=""></option>
      <option class="amount_option" value="1">1</option>
      <option class="amount_option" value="2">2</option>
      <option class="amount_option" value="3">3</option>
      <option class="amount_option" value="4">4</option>
      <option class="amount_option" value="5">5</option>
      <option class="amount_option" value="6">6</option>
    </select>
    <h4 id="people">people</h4>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { store } from "../stores/store";
const tableNumber = "54";



const selected = ref("");


const amChange = () => {
  store.amount = selected.value;
};

onMounted(() => {
  selected.value = store.amount;
});
</script>

<style scoped>

.amount {
  display: inline-block;
  height: 0.5rem;
  width: 0.8rem;
  font-size: 0.3rem;
  margin-left: 0.1rem;
  border-color: white;
  color: #096bec;
}
.amount_option {
  font-size: 0.3rem;
  margin-top: 0.1rem;
  border-color: white;
}
#people {
  font-size: 0.34rem;
  color: #096bec;
  margin-top: 0.02rem;
}

.search {
  height: 0.55rem;
  width: 58%;
  margin-left: 0.3rem;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.searchbtn {
  display: inline-block;
  position: relative;
  height: 0.54rem;
  width: 0.54rem;
  top: 0.02rem;
}

.cancel {
  display: inline-block;
  position: relative;
  height: 0.54rem;
  width: 0.54rem;
  top: 0.02rem;
  text-align: center;
}
.search:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}

.icon {
  display: inline-flex;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}

.info {
  font-size: 0.3rem;
  color: #096bec;
  margin-left: -0.05rem;
  margin-top: 0.05rem;
}
</style>
