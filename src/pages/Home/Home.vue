<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  </div>
</template>

<script>
import Header from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'

export default {
 components:{
     "home-header":Header,
     "home-swiper":homeSwiper,
     "home-icons":homeIcons
 }
}
</script>

<style>

</style>