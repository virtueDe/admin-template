import Axios from "axios";
import router from "../router";
import { Message } from "element-ui";

const Ajax = Axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

// 添加请求拦截器
Ajax.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
Ajax.interceptors.response.use(
  res => {
    if (res.status === 200) {
      // // 正常请求
      // if (res.data.code === 200) return res.data.data || res.data;
      // if (res.data.code === 5163) {
      //   router.replace({ name: "Login" });
      //   Message.error("登录失效，请重新登录！");
      // } else {
      //   Message.error(res.data.message);
      // }
    }
    return Promise.reject(res);
  },
  error => {
    // if (error.response.status === 403) {
    //   router.push({
    //     path: '/error/403',
    //   });
    // }
    // if (error.response.status === 500) {
    //   router.push({
    //     path: '/error/500',
    //   });
    // }
    // if (error.response.status === 502) {
    //   router.push({
    //     path: '/error/502',
    //   });
    // }
    // if (error.response.status === 404) {
    //   router.push({
    //     path: '/error/404',
    //   });
    // }
    return Promise.reject(error);
  }
);
export default Ajax;
