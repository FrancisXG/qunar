<template>
  <div>
  <div class="banner" @click="handleBannerClick()">
    <img class="banner-image" :src="bannerImage" >
    <div class="banner-info">
      <div class="banner-number"><span class="iconfont icon-pic">&#xe60b</span>{{this.galleryImages.length}}</div>
      <div class="banner-title">{{this.sightName}}</div>
    </div>

  </div>
      <common-gallery :imgslist="galleryImages" v-show="isGalleryShow" @closeGallery="handleGalleryClose"></common-gallery>
</div>
</template>

<script>
import CommonGallery from "common/Gallery/Gallery";
export default {
  name: "Banner",
  props:{
    "sight-name":String,
    "banner-image":String,
    "galleryImages":Array

  },
  components: {
    "common-gallery": CommonGallery
  },
  data: function() {
    return {
      isGalleryShow: false,
    
    };
  },
  methods: {
    handleBannerClick: function() {
      this.isGalleryShow = true;
    },
    handleGalleryClose: function() {
      this.isGalleryShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position relative
  width 100%
  height 0
  padding-bottom 62%
  background #eee
.banner .banner-image
  width 100%
.banner .banner-info
  position absolute
  bottom 0
  left 0
  right 0
  color #fff
  line-height 0.6rem
  padding 0 0.2rem 0.2rem
  background linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))
.banner .banner-info .banner-number
  text-align center
  width 1.2rem
  height 0.6rem
  line-height 0.6rem
  background rgba(0, 0, 0, 0.5)
  border-radius 1rem
.banner .banner-info .banner-number .icon-pic
  margin-right 0.1rem
.banner .banner-info .banner-title
  font-size 0.36rem
</style>