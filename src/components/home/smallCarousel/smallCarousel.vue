<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="sw-sl">
      <img :src="slide" alt="">
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getSmallCarousel} from '@/api/index'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000
        }
      },
      swiperSlides: null
    }
  },
  created () {
    getSmallCarousel().then((result) => {
      this.swiperSlides = result.data
    })
  }
}
</script>
<style scoped lang="less">
    .swiper-pagination-bullets {
      width: 320px;height: 40px;left: 50%;transform: translateX(-50%);border-radius: 1.25rem;
      background: rgba(0,0,0,.2);
    }

    .swiper-container {
      width: 100%;height: 234px;
    }
    .sw-sl{
      img{
        width: 100%;height: 100%;
      }
    }
</style>
