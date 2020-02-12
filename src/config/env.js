// 配置编译环境和线上环境之间的切换
const env = process.env
// 阿里图表库avue、joolun
let iconfontVersion = ['567566_qo5lxgtishg','1116466_f0ovtx5y88q']
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`
// 腾讯地图KEY
let qqMapKey = 'PFFBZ-RBM3V-IEEPP-UH6KE-6QUQE-C4BVJ'
// 演示模式开关
let switchDemon = true

if (env.NODE_ENV == 'development') {

} else if (env.NODE_ENV == 'production') {

} else if (env.NODE_ENV == 'test') {

}
export {
  switchDemon,
  qqMapKey,
  iconfontUrl,
  iconfontVersion,
  env
}
