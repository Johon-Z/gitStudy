<template>
   <div>
     <router-view></router-view>
   </div>
</template>

<script>
// import Storage from './storage/index'
export default {
  name: 'app',
  mounted () {
    // Storage.setItem('a', 1)
  }
}
</script>
<style lang='scss'>
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/config.scss';
</style>
