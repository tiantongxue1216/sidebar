<template>
  <div>

    <div style="margin:10px;width:100%;height:100%" v-show="!updateProjectFlag">
      <img src="/static/mock/view_dataobject.png" width="98%" height="98%">
    </div>

    <div id="id_mock_close" @click="mock_close"></div>

  </div>
</template>
<script>
  export default {
    name: 'view-dataobject',
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
        content: '这是 可视化SQL语句查询结果 的页面',
        duration: 3
      });

      this.locateOneElement("id_mock_close",1255,17,97,49);

      // https://blog.csdn.net/u010419337/article/details/81474311:  js怎么监听div元素的resize

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

      mock_close(){
        this.$router.push("/add-dataobject");
      },

    }
  }
</script>

<style>
  #id_mock_close{
    position:absolute;
    z-index:1;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
</style>
