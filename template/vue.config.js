// vue.config.js

const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  lintOnSave: true,
  publicPath: '',
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {},
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "@/assets/sass/element-variables.scss", "@/assets/sass/_mixins.scss", "@/assets/sass/_extends.scss", "@/assets/sass/_variables.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@img', resolve('src/assets/images'))
      .set('@utils', resolve('src/utils'));
  },
};
