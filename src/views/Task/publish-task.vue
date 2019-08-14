<template>
  <div class="m-datasource-index">
    <div style="margin:10px;margin-bottom:50px;width:100% height:100%">
      <img src="/static/mock/publish_task.png" width="95%" height="95%">
    </div>

    <div id="id_ready_publish" @click="mock_ready_publish"></div>

  </div>
</template>
<script>
  export default {
    name: 'publish-task',
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
        content: '这是 发布任务 页面',
        duration: 3
      });

      this.locateOneElement("id_ready_publish",1128,9,144,66);

    },
    methods: {
      locateOneElement(obj,left,top,width,height,leftOffset=0)
      {
        let offset_x = 1;
        let offset_y = 1;
        let step_x = 0;
        let step_y = 0;

        if(window.screen.availWidth>1366){
          offset_x = 1.45
          offset_y = 1.45;
          step_x = 320;
          step_y = 200;
        } else if(window.screen.availWidth<1366){
          offset_x = 0.94
          offset_y = 0.94;
        }

        let originWindowWidth = 1366*offset_x;
        let originWindowHeight = 728*offset_y;
        let newWindowWidth = window.screen.availWidth;
        let newWindowHeight = window.screen.availHeight;

        console.log("window.screen.width="+window.screen.width);
        console.log("window.screen.height="+window.screen.height);
        console.log("newWindowWidth="+newWindowWidth);
        console.log("newWindowHeight="+newWindowHeight);

        let originLeft = left-leftOffset + step_x;
        let originTop = top;
        let originWidth = width;
        let originHeight = height;

        let realLeft = newWindowWidth*originLeft/originWindowWidth;
        let realTop = newWindowHeight*originTop/originWindowHeight;
        let realWidth = newWindowWidth*originWidth/originWindowWidth;
        let realHeight = newWindowHeight*originHeight/originWindowHeight;

        this.d(obj).style.left = realLeft + "px";
        this.d(obj).style.top = realTop + "px";
        this.d(obj).style.width = realWidth + "px";
        this.d(obj).style.height = realHeight + "px";
      },
      mock_ready_publish(){
        this.$parent.$refs.leftSide.currentSelectedIndex = 1;
        this.$router.push("/Task");
      },
    }
  }
</script>

<style>
  .m-datasource-index{
    height:var(--left-side-real-height);
  }
  #id_ready_publish{
    position:absolute;
    z-index:1;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
</style>
