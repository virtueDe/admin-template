// generator.js
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint"
    },
    dependencies: {
      "core-js": "^3.6.4",
      "terser-webpack-plugin": "^2.3.5",
      vue: "^2.6.11",
      "vue-router": "^3.1.5",
      vuex: "^3.1.2",
      axios: "^0.19.2",
      "element-ui": "^2.13.0",
      "normalize.css": "^8.0.1"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-plugin-router": "~4.2.0",
      "@vue/cli-plugin-vuex": "~4.2.0",
      "@vue/cli-service": "~4.2.0",
      "@vue/eslint-config-airbnb": "^5.0.2",
      "babel-eslint": "^10.0.3",
      eslint: "^6.7.2",
      "eslint-config-airbnb-base": "^14.1.0",
      "eslint-config-prettier": "^6.10.1",
      "eslint-plugin-import": "^2.20.1",
      "eslint-plugin-prettier": "^3.1.2",
      "eslint-plugin-vue": "^6.1.2",
      "node-sass": "^4.12.0",
      prettier: "^2.0.2",
      "sass-loader": "^8.0.2",
      "vue-template-compiler": "^2.6.11"
    }
  });
  // 删除 vue-cli3 默认的 /src 和 /public 目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith("src/") || path.startsWith("public/"))
      .forEach(path => delete files[path]);
  });
  // 复制template模版
  api.render("./template");
};
