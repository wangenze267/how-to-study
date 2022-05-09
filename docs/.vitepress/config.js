const { getChildren } = require("./utils/autoSidebar");
const getDirectory = (ele) => getChildren("./docs", ele);
let title = "How to study?";
const nav = [
  {
    text: "front-end-learn",
    link: "/front-end-learn/",
  },
  {
    text: "back-end-learn",
    link: "/back-end-learn/",
  },
//   {
//     text: "Python",
//     link: "/Python/",
//   },
//   {
//     text: "Git",
//     link: "/Git/",
//   },
  // {
  //   text: "change",
  //   link: toggleDark,
  // },
];
const sidebar = {};
nav.forEach((item) => {
  const link = item.text;
  sidebar[`/${link}`] = getDirectory(link);
});
sidebar["/"] = nav;
export default {
    description: 'Just playing around.',
    lang: "zh-CN",
    title,
    head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
    themeConfig: {
        lastUpdated: "最近更新时间",
        // 顶部右侧导航
        nav: [
        { text: "首页", link: "/" },
        { text: "Ned的博客地址", link: "https://www.wangez.site"},
        { text: "如何贡献", link: "/"},
          // {
          //   text: "Components",
          //   // children: [
          //   //   {
          //   //     text: "CSS",
          //   //     // link: "/CSS/Flexbox/flex",
          //   //   },
          //   // ],
          // },
        ],
        // nav: [
        //     {
        //         text: "笔记列表",
        //         items: [...nav],
        //     },
        // ],
        // 侧边栏
        sidebar,
    },
}