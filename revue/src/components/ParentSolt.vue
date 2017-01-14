<template>
  <div class="parent">
    <child>
      <template scope="props">
        <span>Hello from parent</span>
        <span>{{ props.text }}</span>
      </template>
      <template slot="item" scope="props">
        <li>{{ props.text }}</li>
      </template>
      <p slot="a">AA</p>
      <p slot="b">BB</p>
    </child>
  </div>
</template>
<script>
  import Child from './ChildSolt'
  export default {
    components:{
      Child
    }
  }
</script>