module.exports = {

  timeout: 3000,

  beanstalkd: '172.17.42.1',

  message: {

    n_extractors: 2,

    n_dispatchers: 5,

    listen_host: '0.0.0.0',

    listen_port: 8041,

    msg_dir: '/tmp/lims2-msg',

    extract_queue: 'lims2_msg_extract',

    dispatch_queue: 'lims2_msg_dispatch',

    extract_perpage: 500,

    batch_timeout: 60000

  }

}
