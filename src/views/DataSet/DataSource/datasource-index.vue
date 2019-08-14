<template>
  <div>
    <div style="margin:10px;margin-bottom:50px;width:100% height:100%">
      <img src="/static/mock/datasource.png" width="95%" height="95%">
    </div>

    <div id="id_file_manager" @click="toFileManager"></div>
  </div>
</template>
<script>
  export default {
    name: '',
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
        content: '这是 数据源实例 页面',
        duration: 3
      });
      this.locateOneElement("id_file_manager",300,315,146,43);
    },
    methods: {
      toFileManager(){
        this.$router.push("UploadFile");
      },
      locateOneElement(obj,left,top,width,height,leftOffset=0)
      {
        let offset_x = 1;
        let offset_y = 1;
        let step_x = 0;
        let step_y = 0;

        if(window.screen.availWidth>1366){
          offset_x = 1.45
          offset_y = 1.45;
          // step_x = -120;
          // step_y = -50;
        }

        let originWindowWidth = 1366*offset_x;
        let originWindowHeight = 728*offset_y;
        let newWindowWidth = window.screen.availWidth;
        let newWindowHeight = window.screen.availHeight;

        let originLeft = left-leftOffset + step_x;
        let originTop = top + step_y;
        let originWidth = width;
        let originHeight = height;

        let realLeft = newWindowWidth*originLeft/originWindowWidth;
        let realTop = newWindowHeight*originTop/originWindowHeight;
        let realWidth = newWindowWidth*originWidth/originWindowWidth;
        let realHeight = newWindowHeight*originHeight/originWindowHeight;
        console.log(realLeft,realTop,realWidth,realHeight)
        this.d(obj).style.left = realLeft + "px";
        this.d(obj).style.top = realTop + "px";
        this.d(obj).style.width = realWidth + "px";
        this.d(obj).style.height = realHeight + "px";
      },
    }
  }
</script>

<style>
  #id_file_manager{
    position:absolute;
    z-index:12;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
</style>
