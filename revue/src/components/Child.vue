<template>
  <div class="child">
    <div>{{myMessage}}</div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data() {
      return {
          counter: 0
      }
    },
    methods: {
      increment: function() {
          this.counter++;
          this.$emit('increment');
      }
    },
    props: {
      myMessage: {
        type: Number,
        require: true,
        validator: function(value) {
          return value > 10;
        }
      }
    }
  }

  function increment() {
    alert("原生的事件");
  }
</script>
<style scoped>

</style>