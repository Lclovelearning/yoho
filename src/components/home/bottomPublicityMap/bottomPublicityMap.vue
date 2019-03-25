<template>
    <div>
        <div class="fill-div"></div>
        <img class="fill-img" v-for="(item,index) in imgUrl" :key="index" :src="item" alt="">
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: ['//img10.static.yhbimg.com/yhb-img01/2018/09/14/09/0167230098d1cc72ea4c282e7f6e08fce3.jpg?imageView2/3/w/640/h/200/q/60']
    }
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
