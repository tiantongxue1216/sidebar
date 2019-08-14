<template>
  <div>

    <div style="margin:10px;width:100%;height:100%" v-show="!updateProjectFlag">
      <img src="/static/mock/dataobject_list.png" width="98%" height="98%">
    </div>

    <div style="margin:10px;width:100%;height:100%" v-show="updateProjectFlag">
       <img src="/static/mock/update_project_relate_dataobject.png" width="98%" height="98%">
    </div>

    <div id="id_mock_add" @click="mock_add" v-show="!updateProjectFlag"></div>
    <div id="id_mock_update" @click="mock_update" v-show="!updateProjectFlag"></div>
    <div id="id_mock_add_cf" @click="mock_add_cf" v-show="!updateProjectFlag"></div>

    <div id="id_mock_update_close" @click="mock_update_close" v-show="updateProjectFlag"></div>

  </div>
</template>
<script>
  export default {
    name: 'dataobject-index',
    components: {},
    props:[],
    data() {
      return {
        updateProjectFlag:false
      }
    },
    computed: {},
    watch: {},
    created: function(){

    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 数据对象 页面',
        duration: 3
      });

      this.locateOneElement("id_mock_add",443,283,127,41);
      this.locateOneElement("id_mock_update",312,283,127,41);
      this.locateOneElement("id_mock_add_cf",1222,113,127,41);

      this.locateOneElement("id_mock_update_close",1139,60,81,38);

      // https://blog.csdn.net/u010419337/article/details/81474311:  js怎么监听div元素的resize

    },
    methods: {

      locateOneElement(obj,left,top,width,height,leftOffset=0)
      {
        let offset_x = 1;
        let offset_y = 1;
        let step_x = 0;
        let step_y = 0;

        if(window.screen.availWidth==1920){
          offset_x = 1.40;
          offset_y = 1.40;
          step_x = 100;
          step_y = 100;
        } else if(window.screen.availWidth>1366){
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

      mock_add(){
        this.$router.push("/add-dataobject");
      },

      mock_update(){
        this.updateProjectFlag = true;
      },

      mock_add_cf(){
        this.$parent.currentSelectedIndex = 3;
        this.$router.push("/add-customfeature");
      },
      mock_update_close(){
        this.updateProjectFlag = false;
      },
    }
  }
</script>

<style>
#id_mock_add{
  position:absolute;
  z-index:1;
  background:rgba(220,20,60,0.01);
  cursor:pointer;
}
#id_mock_update{
  position:absolute;
  z-index:2;
  background:rgba(220,20,60,0.01);
  cursor:pointer;
}
#id_mock_add_cf{
  position:absolute;
  z-index:3;
  background:rgba(220,20,60,0.01);
  cursor:pointer;
}
#id_mock_update_close{
   position:absolute;
   z-index:3;
   background:rgba(220,20,60,0.01);
   cursor:pointer;
 }
</style>
