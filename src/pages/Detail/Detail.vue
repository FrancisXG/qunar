<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content-box"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name:'Detail',
  components:{
    "detail-banner":Banner,
    'detail-header':DetailHeader
  }

}
</script>

<style lang="stylus" scoped>
.content-box
  width 100%
  height 25rem
</style>