const userStore = {
  namespace: true,
  state: {
    userInfo: [{ name: "wsh", id: 0, age: 24 }]
  },
  getters: {
    userInfos: state => state.userInfo
  },
  mutations: {
    ADD: (state, userInfo) => {
      state.userInfo.push(userInfo);
    }
  }
};

export default userStore;
