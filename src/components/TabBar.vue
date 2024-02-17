<template>
  <Tabbar v-model="active" class="tabbar" id="tabbar">
    <TabbarItem icon="home-o" to="/home" name="home">DashBoard</TabbarItem>
    <TabbarItem icon="newspaper-o" to="/menu" name="menu">Menu</TabbarItem>
    <TabbarItem icon="shopping-cart" to="/sc" name="friends">Shoping Cart</TabbarItem>
    <TabbarItem icon="setting-o" to="/myPage" name="mypage">MyPage</TabbarItem>
  </Tabbar>
</template>

<script setup>
import { Tabbar, TabbarItem } from 'vant';
import { ref, onMounted } from 'vue';

const active = ref('home');

onMounted(() => {
  const tab = document.getElementById('tabbar');
  tab.style.display = 'flex';
});
</script>

<style scoped>
.tabbar {
  display: none;
}
</style>
