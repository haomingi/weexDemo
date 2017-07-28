let routeType = ['push', 'replace']
export default {
  methods: {
    go (obj, type) {
      // 如果是字符串，且不是以'/'说明传进来的是name
      if (typeof obj == 'string' && obj.charAt(0) !== '/') {
        obj = {
          name: obj
        }
      }
      // 没传值 或者 传入的值不在routeType则 默认为push(防止单词拼写错误)
      if (!type || routeType.indexOf(type) == -1) {
        type = 'push'
      }
      this.$router[type](obj)
    }
  }
}
