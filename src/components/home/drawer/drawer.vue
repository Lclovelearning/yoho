<template>
    <div class="dra-all" ref="draall">
        <div class="drawer" ref="dra">
            <div class="drawer-public drawer-first">
                <p class="public-logo">
                    <img src="./img/02efef3ab9c5572af60a63a518f1bd3618.png" alt="">
                </p>
                <p class="public-title">
                    <em class="Chianese">男生</em>
                    <span class="English">BOYS</span>
                </p>
            </div>
            <div class="drawer-public">
                <p class="public-logo">
                    <img src="./img/01399a2fd752e0d334f57be11d4dbf41c5.png" alt="">
                </p>
                <p class="public-title">
                    <em class="Chianese">女生</em>
                    <span class="English">GIRLS</span>
                </p>
            </div>
            <div class="drawer-public">
                <p class="public-logo">
                    <img src="./img/01263e3f813116cc9b61010b8ca580c742.png" alt="">
                </p>
                <p class="public-title">
                    <em class="Chianese">童装</em>
                    <span class="English">KIDS</span>
                </p>
            </div>
            <div class="drawer-public drawer-last">
                <p class="public-logo">
                    <img src="./img/026df1f974add11e823d1912d920176b6c.png" alt="">
                </p>
                <p class="public-title">
                    <em class="Chianese">创意生活</em>
                    <span class="English">LIFT STYLE</span>
                </p>
            </div>
            <div class="drawer-public drawer-last prend">
                <p class="public-logo">
                    <img id="plane" src="./img/01ca6c4eb538c1f91d899a091d7ae5139b.png" alt="">
                </p>
                <p class="public-title">
                    <em id="English" class="Chianese">逛</em>
                    <span class="English">TRENDFINDER</span>
                </p>
            </div>
        </div>
        <div class="right-shadow" ref="rig" @click="back"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      myWidth: null
    }
  },
  methods: {
    back () {
      this.myWidth = this.$refs.draall.style.width
      console.log(this.$refs.draall.style.width)
      this.$refs.draall.style.left = '100%'
    }
  },
  mounted () {
    this.$refs.dra.style.height = window.innerHeight + 'px'
    this.$refs.rig.style.height = window.innerHeight + 'px'
  }
}
</script>

<style scoped lang="less">
    #English {
        font-size: 30px;
    }
    #plane {
        width: 46px;height: 46px;
    }
    .prend {
        margin-top: 50px;
    }
    .public-title {
        height: 100%;width: auto;float: left;
    }
    .Chianese {
        float: left;width: auto;height: 100%;margin-right: 15px;text-align: center;
        line-height: 100px;font-size: 40px;font-weight: 700;font-family: '黑体';
    }
    .English {
        float: left;width: auto;height: 100%;margin-right: 10px;text-align: center;
        line-height: 110px;font-family: "微软雅黑";font-size: 20px;color: #666;
    }
    .public-logo {
        width: 130px;height: 100%;float: left;text-align: center;position: relative;
    }
    .public-logo{
        img {
            width: 56px;height: 56px;position: absolute;left: 50%;top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .dra-all {
        width: 100%;position: fixed;top: -100000px;height: 0px;z-index: 999;
    }
    .right-shadow{
        width: 15%;background: rgba(0,0,0,0.2);position: absolute;top: 0px;right: 0px;
        z-index: 10000;
    }
    .drawer {
        width: 85%;background: #f0f0f0;
    }
    .drawer-last {
        border-bottom: 1px solid #dadada;
    }
    .drawer-public {
        width: 100%;height: 100px;border-top: 1px solid #dadada;background: #fff;
    }
</style>
