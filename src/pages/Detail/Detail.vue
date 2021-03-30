<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content-box"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name:'Detail',
  components:{
    "detail-banner":Banner,
    'detail-header':DetailHeader,
    'detail-list':DetailList,
  },
  data:function(){
    return{
      list:[
        {
          title:'促销',
          children:[
            {
              title:"峨眉山一日游",
              children:[
                {
                  title:'峨眉山一日游-精品'
                }
              ]
            },
            {
              title:'船游乐山大佛'
            },
            {
              title:"峨眉山直通车"
            }
          ]
        },
        {
          title:'门票'
        },
        {
          title:'金顶索道'
        },
        {
          title:'万年寺索道'
        },
        {
          title:'观光车'
        },
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>
.content-box
  width 100%
  height 25rem
</style>