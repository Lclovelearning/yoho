<template>
    <div class="all">
        <!-- 导航 -->
        <search></search>
        <!-- 轮播图 -->
        <carousel></carousel>
        <!-- 分类列表 -->
        <classificationList></classificationList>
        <!-- 宣传图 -->
        <publicityMap></publicityMap>
        <!-- 热门分类 -->
        <hotcategory></hotcategory>
        <!-- 小轮播 -->
        <smallCarousel></smallCarousel>
        <!-- 热门品牌 -->
        <hotBrands></hotBrands>
        <!-- 宣传图 -->
        <bottomPublicityMap></bottomPublicityMap>
        <!-- 人气推荐 -->
        <popRecommendation></popRecommendation>
        <!-- 喜好推荐 -->
        <like></like>
        <!-- 抽屉 -->
        <drawer class="drawer-all"></drawer>
    </div>
</template>
<script>
import search from './search/search'
import carousel from './carousel/carousel'
import classificationList from './classificationList/classificationList'
import publicityMap from './publicityMap/publicityMap'
import hotcategory from './hotcategory/hotcategory'
import smallCarousel from './smallCarousel/smallCarousel'
import hotBrands from './hotBrands/hotBrands'
import bottomPublicityMap from './bottomPublicityMap/bottomPublicityMap'
import popRecommendation from './popRecommendation/popRecommendation'
import like from './like/like'
import drawer from './drawer/drawer'
export default {
  components: {
    search,
    carousel,
    classificationList,
    publicityMap,
    hotcategory,
    smallCarousel,
    hotBrands,
    bottomPublicityMap,
    popRecommendation,
    like,
    drawer
  }
}
</script>
<style>
  .all {
    padding-bottom: 104px;
  }
</style>
