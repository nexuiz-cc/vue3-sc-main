<template>
  <router-view></router-view>
  <TabBar></TabBar>
</template>

<script setup>
import { computed, onMounted, watchEffect } from 'vue'
import TabBar from '../components/TabBar.vue'
defineProps([])
onMounted(() => {})

const method = () => {}
computed(() => {})

watchEffect(() => {})
</script>

<style scoped></style>
