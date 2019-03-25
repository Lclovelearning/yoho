<template>
    <div class="claList-box">
        <ul>
            <li class="myList" v-for="(item,index) in claList" :key="index">
                <img :src="item.imgUrl" alt="">
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {getClaList} from '@/api/index'
export default {
  data () {
    return {
      claList: null
    }
  },
  created () {
    getClaList().then((result) => {
      this.claList = result.data
    })
  }
}
</script>

<style scoped lang="less">
    .claList-box {
        width: 100%;height: auto;margin-top: 30px;margin-bottom: 10px;
    }
    .claList-box {
        ul {
            width: 100%;display: flex;flex-wrap: wrap;
        }
    }
    .myList {
        width: 25%;
    }
    .claList-box {
        .myList {
            img {
                display: block;width: 80px;height: 80px;margin: 0 auto;
            }
        }
    }
    .claList-box {
        .myList {
            span {
                display: block;font-size: 12px;width: 100%;margin: 0 auto;text-align: center;
                font-family: '微软雅黑';
            }
        }
    }
</style>
