<template>
  <div>
    <h1>c2 컴포넌트</h1>
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
    p3: {
      type: Number,
      default: 100,
    },
    p4: {
      validator: function (value) {
        return value > 0;
      },
    },
  },
};
</script>