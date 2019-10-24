/** 注意更改此配置后需要重启进程才生效 */
module.exports = {
  api: {
    port: 2450,
    host: '172.17.42.1'
    // host 可以单独配置 如果不配置则为 172.17.42.1 docker的默认网卡
  },
  console_quiet: false, /** 设置控制台输出是否静默, 默认静默 true */
  log_level: 'debug', /** 设置日志等级, 值为"silly" "debug' 'verbose' 'info' 'warn' 'error' 之一,默认为'debug' */
  ports: [
    {
      port: 2430,
      lims2_api: 'http://www.lims2.com/lims/api', /** lims 2.13 后请设置为站点域名, 127.0.0.1会有问题 */
      local_api: 'http://192.168.33.10/lims/api', // 添加local api 减少网络转发
      timeout: 5000
    }
  ]
}
