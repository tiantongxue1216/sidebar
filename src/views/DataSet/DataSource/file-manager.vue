<template>
  <div>
    <div style="margin:10px;margin-bottom:50px;width:100% height:100%">
      <img src="/static/mock/file_manager.png" width="100%" height="100%">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'file-manager',
    components: {},
    props:[],
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created: function () {


    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 上传文件 管理页面',
        duration: 3
      });

    },
    methods: {

    }
  }
</script>

<style>
</style>
