// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '笔记',
        link: '/pages/b2a479/',
      },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: 'UI库',
    link: '/pages/f2a556/',
    items: [],
  },
  {
    text: '随笔',
    link: '/pages/f2e63f/',
    items: [],
  },
];
