<template>
    <div class = "box">
         <ul>
        <router-link to = "/home" tag = "li">
          <i class="iconfont icon-xiazai45" ></i>
          <span>首页</span>
        </router-link>
        <router-link to = "/classify" tag = "li">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </router-link>
        <router-link to ="/stroll" tag = "li">
          <i class="iconfont icon-icon-test"></i>
          <span>逛</span>
        </router-link>
        <router-link to = "/cart" tag = "li">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </router-link>
        <router-link to = "/mine" tag = "li">
          <i class="iconfont icon-wode-copy"></i>
          <span>我的</span>
        </router-link>
         </ul>
    </div>
</template>
<script>
import '@/components/less/bottomNav.css'
import '@/assets/logo.css'
export default {

}
</script>
<style scoped>
/* @font-face{
font-family: "myCulture";
  src: url("../assets/mylogo/iconfont.eot") format('embedded-opentype'),
    url("../assets/mylogo/iconfont.woff2") format('woff2'),
    url("../assets/mylogo/iconfont.woff") format('woff'),
    url("../assets/mylogo/iconfont.ttf") format('truetype'),
    url("../assets/mylogo/iconfont.svg") format('svg'),
}

[class*=" logo"],
[class^="logo"] {
  font-family: "myCulture";
}
.logo-home::after {
  content: "\e61a";
}
.logo-classify::after {
  content: "\e6ef";
}
.logo-stroll::after {
  content: "\e62c";
}
.logo-cart::after {
  content: "\e673";
}
.logo-mine::after {
  content: "\e64a";
} */
</style>
