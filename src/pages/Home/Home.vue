<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'

export default {
 components:{
     "home-header":Header,
     "home-swiper":homeSwiper,
     "home-icons":homeIcons,
     "home-recommend":homeRecommend,
     "home-weekend":homeWeekend
 }
}
</script>

<style>

</style>