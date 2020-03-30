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
      vuex: "^3.1.2"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-plugin-router": "~4.2.0",
      "@vue/cli-plugin-vuex": "~4.2.0",
      "@vue/cli-service": "~4.2.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.0.3",
      eslint: "^6.7.2",
      "eslint-plugin-prettier": "^3.1.1",
      "eslint-plugin-vue": "^6.1.2",
      less: "^3.0.4",
      "less-loader": "^5.0.0",
      "lint-staged": "^9.5.0",
      prettier: "^1.19.1",
      "vue-template-compiler": "^2.6.11"
    }
  });
  // 复制template模版
  api.render("../template");
};
