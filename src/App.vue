<template>
  <div id="app">
    <tablebar></tablebar>
    <router-view/>
  </div>
</template>

<script>
import './assets/reset.css' // 把css看成模块导入
import tablebar from '@/base/table.vue'

export default {
  name: 'App',
  components: {
    tablebar
  }
}
</script>

<style>

</style>
