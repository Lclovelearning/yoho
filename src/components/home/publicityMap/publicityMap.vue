<template>
    <div>
        <div class="fill-div"></div>
        <img class="fill-img" v-for="(item,index) in imgUrl" :key="index" :src="item" alt="">
    </div>
</template>
<script>
import {getPubMap} from '@/api/index'
export default {
  data () {
    return {
      imgUrl: null
    }
  },
  created () {
    getPubMap().then((result) => {
      this.imgUrl = result.data
    })
  }
}
</script>

<style scoped lang="less">
    .fill-div {
        width: 100%;height: 28px;background: url('./img/011b38b2de8ff682ebd5ea2d019f4e20ee.jpg')
    }
    .fill-img {
        display: block;width: 100%;height: 236px;
    }
</style>
