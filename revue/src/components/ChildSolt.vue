<template>
  <div class="child">
    <slot text="hello from child"></slot>
    <ul>
      <slot name="item" v-for="item in items" :text="item"></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items:['a', 'b', 'c', 'd']
      }
    }
  }
</script>