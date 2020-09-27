import Vuex from "vuex";

import increase from "./increase";
import userStore from "./userStore";

const store = () =>
  new Vuex.Store({
    modules: {
      increase,
      userStore
    }
  });

export default store;
