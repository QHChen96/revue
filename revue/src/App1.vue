<template>
  <div>
    <parent></parent>
    <ref-child ref="childs"></ref-child>
    <tree-folder-contents :children="children"></tree-folder-contents>
    <p>{{ someObject.b }}</p>
    <p>{{ a }}</p>
  </div>
</template>
<script>
  import Parent from './Components/ParentSolt'
  import RefChild from './components/RefChild'
  import TreeFolderContents from './components/TreeFolderContents'
  export default {
    data(){
      return {
        children:[
          { name:'AA',
            children:[
              { name: 'AA/a1',
                children:[
                  { name: 'AA/a1/aa1'},
                  { name: 'AA/a2/aa2'},
                  { name: 'AA/a3/aa3'},
                  { name: 'AA/a4/aa4'}
              ]},
              { name: 'AA/a2'},
              { name: 'AA/a3'},
              { name: 'AA/a4'}
            ]
          },
          {name:'BB'},
          {name:'CC'},
          {name:'DD'},
          {name:'EE'}
        ],
        someObject:{}
      }
    },
    components:{
      Parent,
      RefChild,
      TreeFolderContents
    },
    computed:{
      childText(){
        var childs = this.$refs.childs
        console.log(childs)
        return 1
      }
    },
    mounted(){
      console.log(this.$nextTick())
    }
  }
</script>