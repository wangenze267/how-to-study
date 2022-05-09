//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const fs = require("fs");
const path = require("path");

/**
 * 过滤所要导航的文件
 * 文件名 包含.md 但 不包含  README */
function checkFileType(path) {
  return path.includes(".md") && !path.includes("README");
}

/**
 * 格式化文件路径*/
function prefixPath(basePath, dirPath) {
  // replace用于去除相对路径
  basePath = basePath.replace(/([\.\\\/])(?!([\.]?[a-zA-z]))/g, "");
  // replace用于处理windows电脑的路径用\表示的问题
  return path.join(basePath, dirPath).replace(/\\/g, "/");
}

/**
 * 截取文档路径*/
function getPath(path, ele) {
  let item = prefixPath(path, ele);
  let result = item.split("/");
  result.splice(1, 1);
  return result.join("/");
}

/**
 * 递归获取分组信息并排序*/
function getGroupChildren(path, ele, root) {
  let palist = fs.readdirSync(path + "/" + ele + "/").sort((a, b) => {
    return a - b;
  });
  palist.forEach((item) => {
    if (item.includes("index")) {
      let group = {};
      group.text = "开始"; // item.replace(".md", "");
      group.link = getPath(path + "/" + ele, item).replace(".md", ".html");
      return root.splice(0, 0, ...[group]);
    }
    let info = fs.statSync(path + "/" + ele + "/" + item);
    if (info.isDirectory()) {
      let children = [];
      let group = {};
      group.text = item;
      getGroupChildren(path + "/" + ele, item, children);
      group.children = children;
      root.push(group);
    } else {
      if (checkFileType(item)) {
        let group = {};
        group.text = item.replace(".md", "");
        group.link = getPath(path + "/" + ele, item).replace(".md", "");
        root.push(group);
      }
    }
  });
}
/**
 * 初始化*/
function getChildren(path, ele) {
  var root = [];
  getGroupChildren(path, ele, root);
  return root;
}

module.exports = { getChildren };