<template>
    <div class="pop-all">
        <div class="pop-title">人气推荐
            <div class="pop-logo iconfont icon-shenglvehao"></div>
        </div>
        <img class="pop-img" src="//img11.static.yhbimg.com/yhb-img01/2019/03/20/13/01fb8c7d110e2fb499dbd5303f018010b3.jpg?imageView2/2/w/640/h/200/q/90" alt="">
        <div class="pop-list">
            <ul>
                <li v-for="(item,index) in poprecList" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p class="price">{{item.price}}</p>
                    <p class="num">
                        <span>{{item.num}}人</span>
                        <i>正在浏览</i>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import './css/logo.css'
import {getPopRec} from '@/api/index'
export default {
  data () {
    return {
      poprecList: null
    }
  },
  created () {
    getPopRec().then((result) => {
      this.poprecList = result.data
    })
  }
}
</script>

<style scoped lang="less">
    .pop-logo {
        width: 60px;height: 100%;position: absolute;right: 40px;top: -25px;color: #ccc;
        font-size: 80px;
    }
    .pop-title {
        width: 100%;height: 92px;background: url('./img/011b38b2de8ff682ebd5ea2d019f4e20ee.jpg');
        font-size: 30px;text-align: center;line-height: 92px;font-weight: 50px;font-weight: bold;
        position: relative;
    }
    .pop-img {
        display: block;width: 100%;height: 234px;
    }
    .pop-list {
        width: 100%;height: 386px;overflow-x: auto;
    }
    .pop-list{
        ul{
            width: calc(210px*19);margin: 20px 0px 10px 20px;
        }
    }
    .pop-list{
        li {
            float:left;width: 180px;height: 340px;margin-right: 30px;list-style: none;
        }
    }
    .pop-list{
        li:last-child {
            margin-right: 0px;padding-right: 20px;
        }
    }
    .pop-list {
        li {
            img {
                width: 100%;height: 240px;
            }
        }
    }
    .price {
        width: 100%;height: 22px;text-align: center;line-height: 22px;margin-top: 5px;
        margin-bottom: 5px;color: #444;font-family: '微软雅黑';
    }
    .num {
        width: 100%;height: 36px;
    }
    .num {
        span {
            display: block;width: 100%;height: 18px;font-size: 0.75em;text-align: center;
            color: #b0b0b0;margin-top: 0.5em;font-size: '微软雅黑';
        }
    }
    .num {
        i {
            display: block;width: 100%;height: 18px;font-style: normal;font-size: 0.75em;
            text-align: center;color: #b0b0b0;margin-top: 0.5em;font-size: '微软雅黑';
        }
    }
</style>
