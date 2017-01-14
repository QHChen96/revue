<template>
  <div>
    <!--<t1></t1>
    <t2></t2>-->
    <!--<vo></vo>-->
    <!--<multi></multi>-->
    <!--<p1></p1>-->
    <!--<list></list>-->
    <lodash-list></lodash-list>
  </div>
</template>
<script>
  // import T1 from './components/T1'
  // import T2 from './components/T2'
  // import Vo from './components/Example'
  //import Multi from './components/Multi'
  import P1 from './components/P1'
  import List from './components/GroupList'
  import LodashList from './components/LodashList'
  export default {
    name: 'app2',
    data () {
      return {
        
      }
    },
    components: {
      //List
      LodashList
    }
  }
</script>
<style>

</style>