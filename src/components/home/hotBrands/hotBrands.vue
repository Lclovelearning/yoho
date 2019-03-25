<template>
    <div class="hot-category">
        <div class="hot-title">
            热门品牌
        </div>
        <ul class="hot-list">
            <li v-for="(item,index) in imgUrl" :key="index">
                <img :src="item" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import {getHotBrands} from '@/api/index'
export default {
  data () {
    return {
      imgUrl: null
    }
  },
  created () {
    getHotBrands().then((result) => {
      this.imgUrl = result.data
    })
  }
}
</script>

<style scoped lang="less">
    .hot-title {
        width: 100%;height: 92px;background:url("./img/011b38b2de8ff682ebd5ea2d019f4e20ee.jpg");
        font-size: 30px;font-weight: bold;text-align: center;line-height: 92px;
    }
    .hot-list {
        width: 100%;height: auto;display: flex;flex-wrap: wrap;
    }
    .hot-list{
        li {
            width: 25%;height: 200px;
        }
    }
    .hot-list{
        li:last-child {
            width: 50%;height: 200px;
        }
    }
    .hot-list{
        li {
            img {
                width: 100%;height: 100%;
            }
        }
    }
</style>
