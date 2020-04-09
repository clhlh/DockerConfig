/** 注意更改此配置后需要重启进程才生效 */

module.exports = {
  // v2版本配置, 通知beanstalkd、lims-http客户端配置
  clients: {
    beanstalk: {
      default: [
        // 队列服务地址、队列ready长度限制
        // { url: '192.168.5.5:11301', queue: 5, /* timeout: 60 */ },
        { url: '172.17.42.1:11300', queue: 5, /* timeout: 60 */ }
      ]
    },
    http: {
      id: '0d4b6a53-1237-4d5b-b6d3-8b730aa5cc3f',
      secret: '18b33047-ad1d-4b2a-99b2-5a6169dd2d7b',
      default: [
        // lims-http服务地址
        // { url: 'http://192.168.5.5:9511', /* timeout: 5000 */ },
        { url: 'http://172.17.42.1:9510', /* timeout: 5000 */ }
      ]
    },
    redis: {
      host: '172.17.42.1',
      port: 6379
    }
  },
  // v1版本配置
  urls: {
     nankai: 'http://172.17.42.1/lims/api'
  },
  server: {
    v1: {
      socket: { port: 9898, queue: 15},
      partner: { host: '0.0.0.0', port: 9509 },
    },
    // v2版本配置, reserv-server 服务端配置
    v2: {
      socket: {
        port: 9899,
        // socket 连接实例限制
        queue: 15,
        captcha: false,
        ssl: false,
        // 本reserve-server IP地址, 分布式部署时需配置
        url: '172.17.42.1',
      },
      auth:{
          auth: true,//用于线上临时应急方案。不检测auth，保证可以暂时预约
          clinet_id: 'c344742f-9b64-4010-8a73-2457b20ab953',//保持和CF calnedar/reserv:reserv.php的client_id一致
          client_secret: '6ee67faf-3586-4779-894b-b231948aabd3',
          expire: 60,//当前token过期时间
      }
    },
  },
  limit: {
    ban: 60000,
    timeout: 1000,
    times: 2
  },
  robot: {
      "yiqikong-reserv": {
      "func": {
        "beanstalk": {
          "url": '172.17.42.1:11300'
        },
        "jsonrpc": {
          "url": 'http://172.17.42.1/lims/api',
          "method": 'YiQiKong/actionAddComponent'
        }
      }
    },
    "yiqikong-delete-reserv": {
      "func": {
        "jsonrpc": {
          "url": 'http://172.17.42.1/lims/api',
          "method": 'YiQiKong/actionDeleteComponent'
        }
      }
    },
    "yiqikong-sample": {
      "func": {
        "jsonrpc": {
          "url": 'http://172.17.42.1/lims/api',
          "method": 'YiQiKong/actionAddSample',
        }
      }
    },
    "yiqikong-delete-sample": {
      "func": {
        "jsonrpc": {
          "url": 'http://172.17.42.1/lims/api',
          "method": 'YiQiKong/actionDeleteSample',
        }
      }
    },
    "yiqikong-check-permission": {
      "func": {
        "jsonrpc": {
          "url": 'http://172.17.42.1/lims/api',
          "method": 'YiQiKong/actionCheckPermission',
        }
      }
    },
    "yiqikong-switch": {
      "func": {
        "jsonrpc": {
          "url": 'http://172.17.42.1/lims/api',
          "method": 'YiQiKong/actionSwitch',
        }
      }
    }
  }
}
