<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <form-text></form-text>
    <child @increment="increment"></child>
    <p>{{total}}</p>
    <input :value="sin" @input="sin=$event.target.value">
    <p>测试输入{{sin}}</p>
    <button @click.once="c">点击</button>
    <toggle></toggle>
    <for-item></for-item>
    <ul>
      <li is="my-li" 
        v-for="(todo,index) in todos" 
        :title="todo" 
        @remove="remove(index)">
      </li>
    </ul>
    <input @keyup.enter="add" v-model="todo">
    <br>
    <currency-input v-if="show" v-model="privce"></currency-input>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Child from './Components/Child'
  import Toggle from './Components/Toggle'
  import ForItem from './Components/ForItem'
  import MyLi from './Components/MyLi'
  import FormText from './Components/FormText'
  import CurrencyInput from './Components/CurrencyInput'
  export default {
    data() {
      return {
        total: 0,
        sin: 0,
        todos: [
          'Do the dishes',
          'Do homework'
        ],
        todo: '',
        show: false
      }
    },
    name: 'app',
    components: {
      Hello,
      Child,
      Toggle,
      ForItem,
      MyLi,
      FormText,
      CurrencyInput
    },
    methods: {
      increment: function() {
        this.total++;
      },
      c: function(a) {
        alert("点击")
      },
      remove: function(index) {
        this.todos.splice(index, 1);
      },
      add: function(){
        if(this.todo !== '')
          this.todos.push(this.todo)
          this.todo = ''
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>