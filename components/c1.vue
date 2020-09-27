<template>
  <div>
    <h1>c1 컴포넌트</h1>
    <p>{{ text }}</p>
    <button @click="touch">클릭</button>
  </div>
</template>

<script>
export default {
  props: {
    text: [Number, String],
    touch: {
      type: Function,
      required: true,
    },
  },
};
</script>