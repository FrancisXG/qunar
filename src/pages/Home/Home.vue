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
import axios from 'axios'

export default {
 components:{
     "home-header":Header,
     "home-swiper":homeSwiper,
     "home-icons":homeIcons,
     "home-recommend":homeRecommend,
     "home-weekend":homeWeekend
 },
 data:function(){
   return{
     city:''
   }
 },
 methods:{
   getHomeInfo:function(){
      axios.get('/api/index.json')
    .then(this.getHomeInfoSuccess)
   },
   getHomeInfoSuccess:function(res){
     if(res.data.ret&&res.data.data){
       var data = res.data.data
       console.log(data)

     }
   }
 },
 mounted:function(){
   this.getHomeInfo()

 }
}
</script>

<style>

</style>