<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children"></tree-folder-contents>
  </p>
</template>
<script>
  //import TreeFolderContents from './TreeFolderContents'
  //var TreeFolderContents = require('./TreeFolderContents')
  export default {
    name:'treeFolder',
    props: ['folder'],
    beforeCreate () {
      this.$options.components.TreeFolderContents = require('./TreeFolderContents')
    }
  }
</script>