export default {
  state: {
    count: 0
  },
  mutations: {
    init: (state, value) => {
      state.count = value;
    },
    setCount: (state, value) => {
      state.count += value;
    }
  }
};
