<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name:'Fade'

}
</script>

<style>
.v-enter,.v-leave-to{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
  transition: opacity .5s linear;
}

</style>