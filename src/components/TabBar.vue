<template>
  <Tabbar v-model="active" class="tabbar" id="tabbar">
    <TabbarItem icon="home-o" to="/home" name="home">DashBoard</TabbarItem>
    <TabbarItem icon="shopping-cart" to="/menu" name="menu">Menu</TabbarItem>
    <TabbarItem icon="friends-o" to="/friends" name="friends">Shoping Cart</TabbarItem>
    <TabbarItem icon="setting-o" to="/user" name="mypage">MyPage</TabbarItem>
  </Tabbar>
</template>

<script setup>
import { Tabbar, TabbarItem } from 'vant'
import { ref, onMounted } from 'vue'
import { useMenuStore } from '../stores/menu'
const active = ref('home')
const menuStore = useMenuStore();


onMounted(() => {
  if (menuStore.$state.isLogin) {
    const tab = document.getElementById('tabbar')
    tab.style.display = 'flex'
  }
})
</script>

<style scoped>
.tabbar {
  display: none;
}
</style>
