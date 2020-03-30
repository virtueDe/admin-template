export default {
  /* -----------------------------localStorage------------------------------------ */
  /*
   * set localStorage
   */
  setStorage(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },

  /**
   * get localStorage
   */
  getStorage(name) {
    if (!name) return;
    const content = window.localStorage.getItem(name);
    return JSON.parse(content);
  },

  /**
   * delete localStorage
   */
  removeStorage(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
  },

  /*
   * getObjectURL方法是一个用于获取本地图片的地址
   * */
  getObjectURL(file) {
    let url = null;
    if (window.createObjectURL !== undefined) {
      // basic
      url = window.createObjectURL(file);
    } else if (window.URL !== undefined) {
      // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) {
      // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  },
  // 数字前面添0+千分位符
  handleNumber(num, length) {
    for (let len = `${num}`.length; len < length; len = num.length) {
      num = `0${num}`;
    }
    return num.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  },
  // 递归函数=>获取树的所有的根叶子节点
  getTreeAllData(list, childName = 'children') {
    if (!list) return;
    const arr = [];
    const getChild = (listItem) => {
      for (let i = 0; i < listItem.length; i++) {
        !listItem[i][childName]
          ? arr.push(listItem[i])
          : getChild(listItem[i].children);
      }
    };
    getChild(list);
    return arr;
  },
};
