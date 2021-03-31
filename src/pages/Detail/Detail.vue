<template>
  <div class="detail">
    <detail-banner :sight-name="sightName" :banner-image="bannerImage" :galleryImages="galleryImages"></detail-banner>
    <detail-header></detail-header>
    <detail-list :category-list="categoryList"></detail-list>
    <div class="border"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name:'Detail',
  components:{
    "detail-banner":DetailBanner,
    'detail-header':DetailHeader,
    'detail-list':DetailList,
  },
  
  data:function(){
    return{
      sightName:'',
      bannerImage:'',
      galleryImages:[],
      categoryList:[]


    }
  },
  methods:{
    getDetailInfo:function(){
      axios.get('./api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess:function(res){
      if(res.data.ret&&res.data.data){
        let data = res.data.data
        this.sightName = data.sightName
        this.bannerImage = data.bannerImage
        this.galleryImages = data.galleryImage
        this.categoryList = data.categoryList
      }
    }
  },
  mounted:function(){
    this.getDetailInfo()
  }

}
</script>

<style lang="stylus" scoped>
.border
  height 30rem
</style>