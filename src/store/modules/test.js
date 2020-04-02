// 存储数据集
// 辅助函数 mapState
const state = {};

// 对state数据派生衍生值
// 辅助函数 mapGetters
const getters = {};

// 更改store数据中的状态(同步函数)
// 辅助函数 mapMutations
const mutations = {};

// 提交mutation(包含任意异步)
// 辅助函数mapActions
const actions = {
  // increment ({commit}) {
  //   commit('increment')
  // },
  // getUserInfo: async function ({state}) {
  // async getUserInfo({state}) {
  //   state.userInfo = await api.Self({})
  //   sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  // },
  // async getMenu({state}) {
  //   state.Menu = await api.Menu({})
  //   sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  // }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
