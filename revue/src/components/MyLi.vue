<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">X</button>
  </li>
</template>
<script>
  export default {
    name:'todo-items',
    props: ['title'],
    methods: {
      remove() {
        console.log(this.title)
        $emit('remove')
      }
    }
  }
</script>