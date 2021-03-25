<!-- The ref attr used to find the swiper instance -->
<template>
<div class="sw-wrapper">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img":src="item.imgUrl" />
    </swiper-slide>
    

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  // swiper options example:
  export default {
    name: 'homeSwiper',
    data:function() {
        return {
            
            swiperOption:{
                loop:true,
                pagination:'.swiper-pagination'

            },
            swiperList:[{
                id:'001',
                imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg'
            },
            {
                id:'002',
                imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg'
            },
            {
                id:'003',
                imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
            }]
        }
    },
  }
</script>

<style lang="stylus" scoped>
// 样式穿透
.sw-wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff; 
}

.sw-wrapper {
  overflow: hidden;
//   保持一个比例
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
  background-color: #eee;
}

.swiper-pagination-fraction, .swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom:20px
}

.sw-wrapper .swiper-img {
  width: 100%;
  height: 100%;
}



    
</style>