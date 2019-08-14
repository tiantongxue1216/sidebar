<template>
  <div>
    <div style="margin:10px;width:100%;height:100%">
      <img src="/static/mock/datamodel_add.png" width="100%" height="100%">
    </div>

  </div>
</template>
<script>
  export default {
    name: 'datamodel-add',
    components: {},
    props:[],
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created: function(){

    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 新增数据模型 页面',
        duration: 3
      });



    },
    methods: {}
  }
</script>

<style>

</style>
