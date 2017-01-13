<template>
  <div>
    <input v-model.lazy.trim="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>  
    <span>Multiline message is:</span>
    <p style="white-space: pre">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br>
    <input 
      type="checkbox" 
      v-model="flag" 
      id="flag"
      :true-value="a"
      :false-value="b">
    <label for="flag">{{ flag }}</label>
    <input :value="something"/>
    <input v-model="something">
  </div>
</template>
<script>
  export default {
    data () {
      return {
        a: 'A',
        b: 'B',
        flag: true,
        message: '',
        something:''
      }
    }
  }
</script>