<template>
  <div class="hello">
    <!--<h1 :class="{active:isActive,'text-danger':hasError}">{{ msg }}</h1>-->
    <h1 :class="classObject1">{{ msg }}</h1>
</template>   

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: true,
      hasError: false,
      error: null,
      classObject:{
        active: true,
        'text-danger': true
      }
    }
  },
  computed: {
    classObject1(){
      return {
        active: this.isActive && !this.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  background-color: lightcoral;
}
.text-danger {
  color: red;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
