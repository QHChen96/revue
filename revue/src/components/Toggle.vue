<template>
  <div class="toggle">
    <div v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your address" key="email-input">
    </div> 
    <button @click="toggleInput">Toggle login type</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loginType: 'username',
        loginTypes: ['username', 'email'],
        i:0
      }
    },
    methods: {
      toggleInput() {
        this.loginType = this.loginTypes[++this.i % this.loginTypes.length]
      }
    }
  }
</script>
<style scoped>

</style>