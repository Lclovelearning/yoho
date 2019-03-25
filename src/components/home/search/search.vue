<template>
  <div class="home-search">
    <span class="search-list" @click="drawer"></span>
    <div id="rotation" class="commodity-img"></div>
    <a href="#" class="search-img"></a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      angle: 0,
      myClose: null,
      movewidth: null,
      moveright: null
    }
  },
  methods: {
    drawer () {
      this.movewidth = window.innerWidth
      this.moveright = window.innerWidth - window.innerHeight * 0.15
      console.log(this.movewidth, this.moveright)
    },
    Rotation () {
      let rotation = document.getElementById('rotation')
      rotation.style.transform = `rotateX(${this.angle}deg)`
      if (this.angle / 180 % 2 !== 0) {
        rotation.className = 'after-rotation'
      } else if (this.angle / 180 % 2 === 0) {
        rotation.className = 'commodity-img'
      }
      this.angle += 180
      this.myClose = setTimeout(this.Rotation, 3000)
      if (this.angle >= 540) {
        clearTimeout(this.myClose)
      }
    }

  },
  mounted () {
    this.Rotation()
  }
}
</script>

<style scoped lang="less">
.home-search {
  display: flex;
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.8);
  justify-content: space-between;
}
.search-list {
  display: block;
  width: 46px;
  height: 100%;
  background: url("./img/weibiaoti12.png") no-repeat center center;
  background-size: 40px 40px;
  margin-left: 30px;
}
.commodity-img {
  width: 242px;
  height: 100%;
  background: url("./img/yohologo02.4b84a9fb7d.png") no-repeat 50%;
  background-size: 100%;
  transition: all 0.5s;
  margin-left: 30px;
}
.after-rotation {
  width: 242px;
  height: 100%;
  background: url("./img/yohologo01.fdc1bf372e.png") no-repeat 50%;
  background-size: 100%;
  transition: all 0.5s;
  margin-left: 30px;
}
.search-img {
  display: block;
  width: 104px;
  height: 100%;
  background: url("img/sousuo.png") no-repeat center center;
  background-size: 55px 55px;
}
</style>
