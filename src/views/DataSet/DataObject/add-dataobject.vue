<template>
  <div>
    <div style="margin:10px;width:100%;height:100%">
      <img src="/static/mock/dataobject_add.png" width="100%" height="100%">
    </div>


    <div id="id_save_dataobject" @click="mock_save_dataobject"></div>
    <div id="id_view_feature" @click="mock_view_feature"></div>
    <div id="id_cancel" @click="mock_cancel"></div>
  </div>
</template>
<script>
  export default {
    name: 'dataobject-add',
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
        content: '这是 新增数据对象页面',
        duration: 3
      });
      this.locateOneElement("id_save_dataobject",425,537,112,52);
      this.locateOneElement("id_view_feature",553,537,112,52);
      this.locateOneElement("id_cancel",305,537,112,52);
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

      mock_save_dataobject(){
        this.$router.push("/DataObject");
      },

      mock_view_feature(){
        this.$router.push("/view-dataobject");
      },

      mock_cancel(){
        this.$router.push("/DataObject");
      },
    }
  }
</script>

<style>
  #id_save_dataobject{
    position:absolute;
    z-index:1;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
  #id_view_feature{
    position:absolute;
    z-index:2;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
  #id_cancel{
     position:absolute;
     z-index:3;
     background:rgba(220,20,60,0.01);
     cursor:pointer;
   }
</style>
