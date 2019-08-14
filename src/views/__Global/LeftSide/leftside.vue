<template>
  <div>
    <div class="m-category-series">
      <div @click="lockItem(0)" :style="currentSelectedIndex == 0 ? 'background:#fff;color:#000;':'background:#313A4D;color:#fff;'"><img src="/static/img/1.png" width="22" height="22" style="vertical-align:middle;"><span v-show="ifWidenFlag">&nbsp;&nbsp;&nbsp;工程</span></div>
      <div @click="lockItem(1)" :style="currentSelectedIndex == 1 ? 'background:#fff;color:#000;':'background:#313A4D;color:#fff;'"><img src="/static/img/2.png" width="22" height="22" style="vertical-align:middle;"><span v-show="ifWidenFlag">&nbsp;&nbsp;&nbsp;任务</span></div>
      <div @click="lockItem(2)" :style="currentSelectedIndex == 2 ? 'background:#fff;color:#000;':'background:#313A4D;color:#fff;'"><img src="/static/img/3.png" width="22" height="22" style="vertical-align:middle;"><span v-show="ifWidenFlag">&nbsp;&nbsp;&nbsp;数据集</span></div>
      <div @click="lockItem(3)" :style="currentSelectedIndex == 3 ? 'background:#fff;color:#000;':'background:#313A4D;color:#fff;'"><img src="/static/img/4.png" width="22" height="22" style="vertical-align:middle;"><span v-show="ifWidenFlag">&nbsp;&nbsp;&nbsp;模型</span></div>
    </div>
    <div class="m-switchBtn" @click="widenOrNotHandler">
      <span v-if="ifWidenFlag"><< 收起</span>
      <span v-else>展开></span>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'leftSide',
    components: {},
    props:[],
    data() {
      return {
        ifWidenFlag:true,
        currentSelectedIndex:-1
      }
    },
    computed: {},
    watch: {},
    created: function(){

      this.catagoryArr = [];

      this.catagoryArr.push({
        label: '工程',
        value: 'Project',
        icon:''
      });
      this.catagoryArr.push({
        label: '任务',
        value: 'Task',
        icon:''
      });
      this.catagoryArr.push({
        label: '数据集',
        value: 'DataSet',
        icon:''
      });
      this.catagoryArr.push({
        label: '模型',
        value: 'Model',
        icon:''
      });

    },
    mounted: function () {


    },
    methods: {
      lockItem(index){
        this.currentSelectedIndex = index;
        this.$Message.destroy();
        if(index==0)
        {
          this.$router.push("/Project");
        }else if(index==1){
          this.$router.push("/Task");
        }else if(index==2){
          this.$router.push("/DataSet");
        }else if(index==3){
          this.$router.push("/Model")
        }
      },
      widenOrNotHandler(){
        this.ifWidenFlag = !this.ifWidenFlag;
        if(this.ifWidenFlag){
          document.body.style.setProperty('--left-switch-real-width', 120 + 'px');
          this.$parent.changeLeftSideWidth(120);
        } else {
          document.body.style.setProperty('--left-switch-real-width', 50 + 'px');
          this.$parent.changeLeftSideWidth(50);
        }
      }
    }
  }
</script>

<style lang="less">
  :root {
    --left-switch-real-width: 120px;
  }

  .m-category-series{
    margin-top:25px;
    div{
      padding-left:12px;
      margin-bottom:20px;
      height:60px;
      line-height:60px;
      font-size:18px;
      cursor:pointer;
    }
  }

  .m-switchBtn{
    position:fixed;
    bottom:10px;
    padding-right:10px;
    width:var(--left-side-real-width);
    text-align:right;
    cursor:pointer;
    color:#fff;
    font-size:14px;
  }
</style>
