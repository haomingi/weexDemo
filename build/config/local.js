/**
 * Created by 001758 on 2017/7/24.
 */
module.exports = {
  //mockUrl: 'http://10.30.28.44:3000/mobile_mock',
  //proxyHost: 'https://m.xinhehui.com'
  // //调试埋点
  // debugBury: true
  proxyHost: this.mockUrl || 'https://yw3.xinhehui.com/',
  tracklogtarget: 'http://10.50.28.197',
  targetHd: this.mockUrl || 'https://hd-yw3.xinhehui.com/'
}