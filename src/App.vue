<template>
  <div id="app">
    <!-- json文件缓存  不摧毁 不会重新挂载-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
