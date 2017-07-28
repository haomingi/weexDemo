/**
 * Created by 001758 on 2017/7/24.
 */
var path = require('path')

// 获取绝对路径
function getAbsolutePath(addr) {
  if(!/\/src\//.test(addr)) {
    addr = '../src/' + addr;
  }
  return path.resolve(__dirname, addr);
}

module.exports = {
  'footer': getAbsolutePath('components/fragment/footer.vue'),
  'header': getAbsolutePath('components/fragment/header.vue')
}