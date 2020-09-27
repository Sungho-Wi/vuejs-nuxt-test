<template>
  <div class="">
    <button @click="$store.commit('setCount', 2)">
      <!-- {{ $store.state.count }} -->
      {{ count }}
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["count"]),
  fetch({ store }) {
    console.log("test");
    store.commit("init", 7);
  },
};
</script>