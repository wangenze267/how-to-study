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
  /**
   * 想要增加左侧导航栏分类的请按照如下结构进行添加
   */
  //   {
  //     text: "分类名称",
  //     link: "/分类路径，请与分类名称保持一致/",
  //   },

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
    head: [["link", { rel: "icon", type: "image/x-icon", href: "favicon.ico" }]],
    themeConfig: {
        lastUpdated: "最近更新时间",
        // 顶部右侧导航
        nav: [
        { text: "首页", link: "/" },
        { text: "Ned的博客地址", link: "https://www.wangez.site"},
        ],
        // 侧边栏
        sidebar,
    },
}