<template>
  <div class="m-dataset">
    <div class="m-static-dataset-category">

        <div class="m-category-title" @click="lockItem(0)" :style="currentSelectedIndex == 0 ? 'background:#808FA3;color:#fff;':'background:#D6DCE3;color:#000;'">数据源</div>
        <div class="m-category-title" @click="lockItem(1)" :style="currentSelectedIndex == 1 ? 'background:#808FA3;color:#fff;':'background:#D6DCE3;color:#000;'">数据模型</div>
        <div class="m-category-title" @click="lockItem(2)" :style="currentSelectedIndex == 2 ? 'background:#808FA3;color:#fff;':'background:#D6DCE3;color:#000;'">数据对象</div>
        <div class="m-category-title" @click="lockItem(3)" :style="currentSelectedIndex == 3 ? 'background:#808FA3;color:#fff;':'background:#D6DCE3;color:#000;'">自定义特征</div>

    </div>
    <div class="m-dataset-main-area">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dataset-index',
    components: {},
    props:[],
    data() {
      return {
        currentSelectedIndex:-1
      }
    },
    computed: {},
    watch: {},
    created: function(){

    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 数据集模块 页面',
        duration: 3
      });

    },
    methods: {
      lockItem(index){
        this.currentSelectedIndex = index;
        this.$Message.destroy();
        if(index==0)
        {
          this.$router.push("/DataSource");
        }else if(index==1){
          this.$router.push("/DataModel");
        }else if(index==2){
          this.$router.push("/DataObject");
        }else if(index==3){
          this.$router.push("/CustomFeature")
        }
      }
    }
  }
</script>

<style>

  .m-dataset{
    display:inline-flex;
    justify-content:flex-start;
  }

  .m-static-dataset-category{
    width:135px;
    padding-top:10px;
    height:var(--left-side-real-height);
    background-color:#D6DCE3;
  }
  .m-category-title{
    padding-left:20px;
    margin-bottom:10px;
    height:35px;
    line-height:35px;
    font-size:14px;
    cursor:pointer;
  }
  .m-dataset-main-area{
    background-color:#EDEDED;
    height:var(--left-side-real-height);
   }
</style>
