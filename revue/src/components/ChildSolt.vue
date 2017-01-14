<template>
  <div class="child" v-once>
    <slot text="hello from child"></slot>
    <ul>
      <slot name="item" v-for="item in items" :text="item"></slot>
    </ul>
    <slot name="a"></slot>
    <slot name="b"></slot>
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