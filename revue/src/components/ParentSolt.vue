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