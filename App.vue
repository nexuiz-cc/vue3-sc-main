<template>
  <router-view></router-view>
  <TabBar></TabBar>
</template>

<script setup>
import { computed, onMounted, reactive, watchEffect, ref } from 'vue'
import TabBar from '../components/TabBar.vue'
import Home from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'
import { store } from './plugins/store.js'
defineProps([])
const flg = reactive({store.isLogin});
onMounted(() => {})

const method = () => {}
computed(() => {})

watchEffect(() => {})
</script>

<style scoped></style>
