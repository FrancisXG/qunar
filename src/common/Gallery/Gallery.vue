<template>
  <div class="gallery-container" @click="handleGalleryClick">
    <div class="img-wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgslist" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonGallery",
  props:{
    imgslist:{
      type:Array,
      defalut:function(){
        return []
      }
    }
  },
  data:function(){
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        paginationType:'fraction',
        
        observer:true,
        observeParents:true
      }
    }
  },
  methods:{
    handleGalleryClick:function(){
      this.$emit('closeGallery');
    }
  }
};
</script>

<style lang="stylus" scoped>
div
  display flex

.gallery-container >>> .swiper-container 
  position absolute
  top 0
  left 0
  width 100%
  height 100%

.gallery-container >>> .swiper-slide 
  flex-direction column
  justify-content center

.gallery-container
  position relative 
  display flex
  flex-direction column
  justify-content center
  position fixed
  z-index 99
  top 0
  bottom 0
  left 0
  right 0
  background #000

.gallery-container .img-wrapper
  align-self center
  width 100%
  height 0
  padding-bottom 100%

.gallery-container .img-wrapper img
  width 100%

.gallery-container .swiper-pagination
  bottom  .48rem
  justify-content center
  color #fff
 
</style>