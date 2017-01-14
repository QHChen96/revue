<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>
    <transition
      appear
      appear-class="custom-appear-class"
      appear-active-class="custom-appear-active-class"
      appear
    >
      <p v-if="show">
        Demo
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        v-bind:css="false"
      </p>
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
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el ,done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300})
        Velocity(el, { fontSize: '1em'}, { complete: done} )
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateX: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
          },
          { complete: done }
        )
      }
    }
  }
</script>
<style>
.custom-appear-class {
  background-color:  red;
}
.custom-appear-active-class {
  background-color: yellow;
}
</style>