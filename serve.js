// 读取内容
const text = require('./src/day')

// 随机得到整数
var numX = Math.ceil(Math.random() * 18);

setTimeout(() => {
  require('./src/get')
}, 1000);

// 输入账号密码
module.exports.obj = {
  phone: '18170784383',
  password: '123456Ch',
  title: text.dayTitle[numX],
  content: text.dayContent[numX],
}
