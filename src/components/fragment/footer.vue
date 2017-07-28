<template>
  <div class="crow">
    <div class="citem" v-for="item in map">
      <text>{{item.text}}</text>
    </div>
  </div>
</template>
<style scoped>
  .citem{
    flex:1;
    justify-content: center;
    align-items:center;
    border-style: solid;
    border-width: 1px;
    border-color: #efefef;
  }
  .crow{
    width: 750px;
    flex-direction: row;
    height:80px;
    position: absolute;
    bottom: 0;
  }
  .crow .active p {
    color: #10a0eb;
  }
  .crow p {
    text-align: center;
    line-height: 48px;
    font-size: 24px;
  }
</style>
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
      return {
        map: [
          {
            id: '01',
            name: 'home',
            class: '#recommend',
            text: '推荐'
          },
          {
            id: '02',
            name: 'invest',
            class: '#invest',
            text: '投资'
          },
          {
            id: '03',
            name: 'account',
            class: '#account',
            text: '账户'
          }
        ]
      }
    },
    methods: {
      go: function (router) {
        console.log(router)
//        this.$router.push(router)
      },
      iconName: function (item) {
        var suffix = ''
        if (item.name == this.$route.name) {
          suffix = '-selected'
        }
        return item.class + suffix
      }
    }
  }
</script>
