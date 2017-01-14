<template>
  <div id="multi">
    <transition name="slide-fade" mode="in-out">
      <button :key="docState" @click="toggle">
        {{ docState }}
      </button>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        state: ['Edit','Save','Cancel'],
        docState: 'Edit',
        index: 0
      }
    },
    methods: {
      toggle(){
        this.docState = this.state[++this.index % this.state.length]
      }
    }
  }
</script>
<style scoped>
#multi{
  position: relative;
  margin-left: 100px;
}
#multi button {
  width: 60px;
  position: absolute;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .5s;
}
.slide-fade-enter{
  opacity: 0;
  transform: translateX(60px)
}
.slide-fade-leave-active {
  opacity: 0;
  transform: translateX(-60px)
}
</style>