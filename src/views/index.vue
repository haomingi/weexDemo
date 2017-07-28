<template>
  <div class="wrapper">
    <app-header></app-header>
    <span class="title">Hello {{target}}</span>
    <app-footer></app-footer>
  </div>
</template>

<style>
  .wrapper { align-items: center; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    width: 700px;
    height: 700px;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
  .indicators {
    item-color: green;
    item-selected-color: red;
    item-size: 50px;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    right: auto;
  }
</style>

<script>
  import appFooter from './../components/fragment/footer.vue'
  import appHeader from './../components/fragment/header.vue'

  export default{
    data () {
      return {
        target: 'World',
        imageList: [
          {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    components: {
      appFooter,
      appHeader
    },
    created () {
      console.log('init')
    }
  }
</script>
