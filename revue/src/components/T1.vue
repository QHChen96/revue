<template>
  <div id="t1">
    <button @click.stop.prevent="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="false">hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="!show">World</p>
    </transition>
    <transition name="bounce">
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
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(0.1, 1.0, 0.27, 1.55);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    /*opacity: 0;*/
  }
  .bounce-enter {
    background-color: palevioletred;
  }
  .bounce-enter-active {
    animation: bounce-in 2s;
  }
  .bounce-leave-active {
    animation: bounce-out 2s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>