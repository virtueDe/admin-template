import Ajax from './index.js';

export default {
  /**
   * 上传交单图片
   */
  async saveImage(params) {
    await Ajax.post(`/steel/image/saveImage`, params);
  },
};
