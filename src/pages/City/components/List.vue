<template>
  <div class="list" ref="listWrapper">
    <div>
      <div class="hot-cities" >
        <div class="hot-cts-title">热门城市</div>
        <ul class="clearfix">
          <li v-for="item in computedCities" :class="item.borderType" :key="item.id"
          @click="handleCityClick(item.name)">{{item.name}}</li>
          
          
        </ul>
        </div>
        <div class="alphabet-menu">
          <div class="alphabet-menu-title">字母排序</div>
          <ul class="clearfix">
           <li v-for="(item,index) in letters" :key="index" @click="handleLetterClick">{{item}}</li>
           
          </ul>
        </div>
       
         <div class="alphabet-list" v-for="(item,key) in cities" :key="key" :ref="key">
          <div class="alphabet-list-title">{{key}}</div>
          <ul class="clearfix">
            <li v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
          </ul>
        </div>
         
        
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
  name:'CityList',
  props:{
    cities:Object,
    hotCities:Array
  },
  data() {
    return {
      letter: ''
    }
  },
  
  
  mounted:function(){
    this.scroll = new BScroll(this.$refs.listWrapper,{
			click: true
		})
  },

  watch:{
    letter:function(){
      var elem = this.$refs[this.letter][0]
      this.scroll.scrollToElement(elem)
    }

  },
  updated:function(){
    this.scroll.refresh()
  },
  methods:{
    handleLetterClick:function(e){
      this.letter = e.target.innerText
    },
    handleCityClick:function(city){
      // this.$store.commit('changeCityName',city)
      this.changeCityName(city)
      this.$router.push("/")
    },
    ...mapMutations({
      changeCityName:'changeCityName'
    })
  },

  computed:{
    letters:function(){
      var letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters

    },
    computedCities:function(){
      var result = [],
            length = this.hotCities.length,item
      for(let i = 0;i<length;i++){
        var resObj={}
        item = this.hotCities[i]
        resObj.name = item.name
        if(item.order===1){
          resObj.borderType = ''
        }
        else if(item.order ===2 ||item.order===3){
          resObj.borderType = 'border-left'
        }else if(item.order%3===1){
          resObj.borderType = 'border-top'
        }
        else{
          resObj.borderType = 'border-topleft'
        }
        result.push(resObj)

      }

      return result
    }
  }
}
</script>

<style lang="stylus"scoped>
@import '~styles/variables.styl'

div
  box-sizing:border-box
  touch-action pan-y;

.clearfix::after
  display block
  content ""
  clear both


.list
  position absolute 
  top .88rem
  left 0
  right 0
  bottom 0
  overflow hidden


.hot-cities
  width 100%
  height 4.32rem

.hot-cities .hot-cts-title
  width 100%
  height .72rem
  line-height .72rem
  font-size .26rem
  color $darkTxtColor
  padding 0 .2rem

.hot-cities .hot-cts-title,
.alphabet-menu .alphabet-menu-title,
.alphabet-list .alphabet-list-title
  width 100%
  height .72rem
  line-height .72rem
  padding 0 .2rem
  background #F5F5F5

.hot-cities ul li 
  float:left
  width 33.33%
  height .9rem
  text-align center 
  line-height .9rem
  box-sizing border-box

.alphabet-menu ul 
  height 4.2rem
  margin .3rem 0

.alphabet-menu ul li
  float left 
  width 16.67%
  height .9rem
  line-height .9rem
  text-align center

.alphabet-list ul li
  float left 
  width 25%
  height .9rem
  line-height .9rem
  text-align center




</style>