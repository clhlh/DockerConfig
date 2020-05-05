/** 注意更改此配置后需要重启进程才生效 */
module.exports = {
  interval: '00 30 23 * * *',
  timeZone: 'Asia/Shanghai',
  clientId: 'd7f7cc2a-0bd2-4ac1-bf9c-190dd3d3e998',
  clientSecret: 'a815f342-2ed4-471e-a8df-ab22449ca28c',
  sites: [
    // {
    //  name: '*',
    //  api_url: 'http://172.17.42.1/lims/api',
    // },
    {
      name: 'eq-stat',
      type: 'gini',
      api_url: 'http://172.17.42.1/stat/api',
    },

  ]
}
