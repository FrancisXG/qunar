<template>
<div>
  <home-header></home-header>
  <home-swiper :swiperList="swiperList"></home-swiper>
  <home-icons :iconboxdata="iconboxdata"></home-icons>
  <home-recommend :recommendList="recommendList"></home-recommend>
  <home-weekend :weekendList="weekendList"></home-weekend>
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
     "city":'',
     "swiperList":[],
     "iconboxdata":[],
     "recommendList":[],
     "weekendList":[]


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
       this.city = data.city
       this.swiperList = data.swiperList
       this.iconboxdata = data.iconboxdata
       this.recommendList = data.recommendList
       this.weekendList = data.weekendList

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