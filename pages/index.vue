<template>
  <div>
    <c1 :text="message1" :touch="t1"></c1>
    <c2 :text="message2" :touch="t2"></c2>
  </div>
</template>

<script>
import c1 from "../components/c1.vue";
import c2 from "../components/c2.vue";
export default {
  components: { c1, c2 },
  data() {
    return {
      message1: "hello world1",
      message2: "hello world2",
    };
  },
  methods: {
    t1() {
      alert("t1");
      this.message1 = "goodbye world";
    },
    t2() {
      alert("t2");
    },
  },
};
</script>

<style>
</style>