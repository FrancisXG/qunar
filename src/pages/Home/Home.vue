<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  </div>
</template>

<script>
import Header from './components/Header'
import homeSwiper from './components/swiper'

export default {
 components:{
     "home-header":Header,
     "home-swiper":homeSwiper
 }
}
</script>

<style>

</style>