<template>
  <div>
    <label for="a">A</label>
    <input type="radio" id="a" v-model="view" value="v-a">
    <label for="b">B</label>
    <input type="radio" id="b" v-model="view" value="v-b">
    <transition name="component-fade" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>
</template>
<script>
import C1 from './C1'
import C2 from './C2'
  export default {
    data () {
      return {
        view: 'v-a'
      }
    },
    components: {
      'v-a': C1,
      'v-b': C2
    }
  }
</script>
<style>
.component-fade-enter, .component-fade-leave-active{
  opacity: 0;
}
.component-fade-enter-active, .component-fade-leave-active{
  transition: opacity .3s ease;
}
</style>