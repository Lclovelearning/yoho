<template>
    <div class="like-all">
        <div class="like-title">
            <i class="iconfont icon-shangchuanxiangshangjiantou"></i>
            <span>你可能喜欢</span>
        </div>
        <ul class="like-list">
            <li v-for="(item,index) in likeList" :key="index">
                <img :src="item.imgUrl" alt="">
                <a href="">{{item.title}}</a>
                <p>{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import './css/logo.css'
import {getLike} from '@/api/index'
export default {
  data () {
    return {
      likeList: null
    }
  },
  created () {
    getLike().then((resule) => {
      this.likeList = resule.data
    })
  }
}
</script>

<style scoped lang="less">
    .like-all {
        width: 100%;height: auto;border-top: 1px solid #ccc;
    }
    .like-title {
        width: 100%;height: 120px;text-align: center;line-height: 120px;
    }
    .iconfont{
        font-style: normal;font-size: 50px;color: #dadada;
    }
    .like-title {
        span {
            font-size: 50px;color: #dadada;font-weight: bold;
        }
    }
    .like-list {
        width: 100%;height: auto;display: flex;flex-wrap: wrap;
    }
    .like-list {
        li {
            width: calc(~"50% - 40px");height: auto;
            padding: 10px 20px 60px 20px;
        }
    }
    .like-list {
        li {
            img {
                width: 100%;height: 430px;
            }
        }
    }
    .like-list {
        li {
            a {
                display: block;width: 290px;height: 57px;margin: 0 auto;overflow: hidden;color: #444;
            }
        }
    }
    .like-list {
        li {
            p {
                display: block;width: 290px;height: 62px;margin: 0 auto;color: #444;
            }
        }
    }
</style>
