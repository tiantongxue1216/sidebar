<template>
  <div>
    <div style="margin:10px;width:100%;height:100%">
      <img src="/static/mock/customfeature_list.png" width="98%" height="98%">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'customfeature-index',
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
        content: '这是 自定义特征 列表页面',
        duration: 3
      });

    },
    methods: {}
  }
</script>

<style>

</style>
