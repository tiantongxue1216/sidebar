<template>
  <div>
    <div style="margin:10px;width:100%;height:100%" v-show="!addFlag">
      <img usemap="#planetmap" src="/static/mock/project_list.png" width="100%" height="100%">
      <map name="planetmap">
        <area shape="rect" coords="15,0,227,55" @click="newProject" />
        <area shape="rect" coords="137,132,583,283" @click="openProject" />
      </map>
    </div>

    <div style="margin:10px;width:100%;height:100%" v-show="addFlag">
      <img src="/static/mock/project_add.png" width="100%" height="100%">
    </div>

    <div id="id_mock_add_ok" @click="openProject" v-show="addFlag"></div>
    <div id="id_mock_add_cancel" @click="cancelProject" v-show="addFlag"></div>

  </div>
</template>
<script>
  export default {
    name: 'project-index',
    components: {},
    props:[],
    data() {
      return {
        addFlag:false
      }
    },
    computed: {},
    watch: {},
    created: function(){

    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 工程列表 页面',
        duration: 3
      });
    },
    methods: {
      newProject(){
        this.addFlag = true;
        this.$nextTick(() => {
          this.locateOneElement("id_mock_add_ok",745,321,115,41);
          this.locateOneElement("id_mock_add_cancel",627,324,115,41);
        });

      },
      openProject(){
        this.$router.push("/CreateProject");
      },
      cancelProject(){
        this.addFlag = false;
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
          step_x = 320;
          step_y = 170;
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
  #id_mock_add_ok{
    position:absolute;
    z-index:12;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
  #id_mock_add_cancel{
    position:absolute;
    z-index:22;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
</style>
