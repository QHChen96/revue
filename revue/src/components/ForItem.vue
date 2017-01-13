<template>
  <div>
    <ul>
      <li v-for="(item,index) in items">
        {{index}}:{{item.firstname}} {{item.lastname}}
      </li>
    </ul>
    <span v-for="n in filterOdd"> {{n}} </span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        numbers: [1,2,3,4,5,6,7,8,9,10],
        items:[
          {firstname:'chen1',lastname:'qinhao1'},
          {firstname:'chen2',lastname:'qinhao2'},
          {firstname:'chen2',lastname:'qinhao2'}
        ]
      }
    },
    computed: {
      filterOdd() {
        return this.numbers.filter((num) => num % 2 === 0)
      }
    }
  }
</script>
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>