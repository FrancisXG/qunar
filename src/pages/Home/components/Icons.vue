<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="icons-wrapper">
    <div class="icon-wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="(page,idx) in pages" :key="idx">
          <div class="icon-box" v-for="item in page" :key="item.id">
            <div class="icon-img-box">
              <img class="icon-img" :src="item.iconUrl" />
            </div>
            <p class="i-description">{{ item.text }}</p>
          </div>
        </swiper-slide>
       
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeIcons",
  props:{
    "iconboxdata":Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      },
      
    };
  },
  computed:{
    pages:function(){
      var pages = []
      this.iconboxdata.forEach(function(item,idx){
        var page = Math.floor(idx/8);
        if(!pages[page]){
          pages[page]= []
        }
        pages[page].push(item)
      })
      return pages;

    }

  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons-wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 50%
  margin 0.2rem 0
.icons-wrapper .icon-box
  position relative
  float left
  width 25%
  height 0
  padding-bottom 25%
.icons-wrapper .icon-box .icon-img-box
  position absolute
  top 0
  left 0
  right 0
  bottom 0.44rem
.icons-wrapper .icon-box .icon-img-box img
  display block
  margin 0 auto
  height 100%
  transform scale(0.85)
.icons-wrapper .icon-box .i-description
  position absolute
  bottom 0
  left 0
  right 0
  height 0.44rem
  line-height 0.44rem
  text-align center
  color $darkTxtColor
  ellipsis()
</style>
