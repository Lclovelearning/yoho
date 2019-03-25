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

<style lang="less">
  .swiper-pagination-bullets {
      .swiper-pagination-bullet {
         width: 16px;height: 16px;background: #fff;
      }
    }
    .swiper-container-horizontal {
      .swiper-pagination-bullets {
        .swiper-pagination-bullet {
          margin-top: 11px;margin-right: 15px;
        }
      }
    }
</style>
