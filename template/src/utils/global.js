import Vue from "vue";
import config from "./config";
import filters from "./filters";
import enums from "./enums";
import api from "../server/config";
import _ from "./lodash";
import utils from "./index";
import validator from "./validator";

Vue.prototype.$config = config;
Vue.prototype.$enums = enums;
Vue.prototype.$filters = filters;
Vue.prototype.$api = api;
Vue.prototype.$_ = _;
Vue.prototype.$utils = utils;
Vue.prototype.$validator = validator;

for (const key in filters) {
  Vue.filter(key, filters[key]);
}

Vue.prototype.$search = async (table, val) => {
  if (!sessionStorage.getItem("loginData")) return;
  if (table && table.api) {
    const query = _.cloneDeep(table.query) || {};
    if (!table.hidePagination) {
      // console.log(val)
      query.pageSize = 10;
      query.currentPage = val || table.pagination.currentPage;
    } else {
      query.pageSize = 200;
      query.currentPage = 1;
    }
    if (query.queryContent) {
      query.queryContent = query.queryContent.replace(/\s|\t+/g, "");
    }
    table.loading = true;
    try {
      const data = await table.api(query);
      if (data instanceof Array) {
        table.data = data;
      } else {
        table.data = data.data;
        table.other = _.omit(data, ["data", "totalNum"]);
        table.pagination.totalNum = data.totalNum;
      }
    } catch (e) {
      table.loading = false;
    }
    table.loading = false;
  }
};
