<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="after-leave"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="show">Look at me!</p>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      beforeEnter(el){
        console.log("beforeEnter...")
      },
      enter(el, done){
        console.log("enter...")
        done()
      },
      afterEnter(el){
        console.log("afterEnter...")
      },
      enterCancelled(el){
        console.log("enterCancelled...")
      },
      beforeLeave(el){
        console.log("beforeLeave...")
      },
      leave(el, done){
        console.log("leave...")
        done()
      },
      afterLeave(el){
        console.log("afterLeave...")
      },
      leaveCancelled(el){
        console.log("leaveCancelled...")
      }
    }
  }
</script>
<style>

</style>