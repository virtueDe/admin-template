// 按需加载, 减少打包后体积大小
import clone from 'lodash/clone';
import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import omit from 'lodash/omit';
import at from 'lodash/at';
import drop from 'lodash/drop';
import differenceWith from 'lodash/differenceWith';
import isEqual from 'lodash/isEqual';

export default {
  // 浅克隆
  clone,
  // 深克隆
  cloneDeep,
  // 防抖
  debounce,
  // 节流
  throttle,
  // http://lodash.think2011.net/find
  find,
  // 判断是否为空
  isEmpty,
  // 首字母为大写
  upperFirst,
  // 转换为驼峰命名
  camelCase,
  // 返回未传入的对象
  omit,
  // 取值
  at,
  // 删除数组
  drop,

  differenceWith,

  isEqual,
};
