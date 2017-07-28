<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<style>
  @import "./assets/css/common.css";
</style>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
