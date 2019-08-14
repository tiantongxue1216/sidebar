<template>
  <div>
    <div id="svgBox">
      <div id="svgLeft">
        左侧组件选择区域

      </div>

      <div id="svgResize_1"></div>

      <div id="svgCenter">
        中部核心区域

      </div>

      <div id="svgResize_2"></div>

      <div id="svgRight">
        右侧属性设置区域

      </div>

    </div>
  </div>
</template>
<script>
  import $$ from 'jquery'
  export default {
    name: 'create-project',
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
        content: '这是 新建或打开工程 页面',
        duration: 3
      });
      this.dragControllerDiv();
    },
    methods: {
      dragControllerDiv() {

          var availableCoreWidth = document.body.offsetWidth - 120;

          var svgResize_1 = document.getElementById("svgResize_1");

          var svgResize_2 = document.getElementById("svgResize_2");

          var svgLeft = document.getElementById("svgLeft");

          var svgCenter = document.getElementById("svgCenter");

          svgCenter.style.left = 15 + "px";

          var svgRight = document.getElementById("svgRight");

          svgResize_1.onmousedown = function(e){
            var startX = e.clientX;
            svgResize_1.left = svgResize_1.offsetLeft;
            document.onmousemove = function(e){
              var endX = e.clientX;
              var moveLen = svgResize_1.left + (endX - startX);
              //var maxT = svgBox.clientHeight - svgResize.offsetHeight;
              if(moveLen<160) moveLen = 160
              //if(moveLen>maxT-30) moveLen = maxT-30;

              svgResize_1.style.left = moveLen + "px";
              svgLeft.style.width = moveLen + "px";

              //svgCenter.style.left = moveLen + "px";

              //svgCenter.style.width = (svgBox.clientWidth - 200 - moveLen - 5) + "px";

            }
            document.onmouseup = function(evt){
              document.onmousemove = null;
              document.onmouseup = null;
              svgResize_1.releaseCapture && svgResize_1.releaseCapture();
            }
            svgResize_1.setCapture && svgResize_1.setCapture();
            return false;
          }

        svgResize_2.onmousedown = function(e){

            console.log("******")
          var startX = e.clientX;

          svgResize_2.right = svgResize_2.offsetRight;

          document.onmousemove = function(e){

            var endX = e.clientX;

            console.log("endX="+endX);

            var moveLen = document.body.offsetWidth -endX;

           // if(moveLen<160) moveLen = 160

            svgResize_2.style.right = moveLen + "px";

            svgRight.style.width = moveLen + "px";

          }
          document.onmouseup = function(evt){
            document.onmousemove = null;
            document.onmouseup = null;
            svgResize_2.releaseCapture && svgResize_2.releaseCapture();
          }
          svgResize_2.setCapture && svgResize_2.setCapture();
          return false;
        }
      },
    }
  }
</script>

<style>

  #svgBox{
    width:100%;
    height:var(--left-side-real-height);
    position: relative;
    overflow:hidden;
  }

  #svgLeft{
    width:160px;
    height:var(--left-side-real-height);
    float:left;
    overflow: auto;
    z-index:10;
    font-size:18px;
    font-weight:bold;
  }

  #svgResize_1{
    position: absolute;
    left:160px;
    width:5px;
    height:var(--left-side-real-height);
    cursor: w-resize;
    float:left;
    background-color:#000;
  }

  #svgCenter{
    position: relative;
    height:var(--left-side-real-height);
    float:left;
    overflow: auto;
    font-size:18px;
    font-weight:bold;
  }

  #svgResize_2{
    position: absolute;
    right:210px;
    width:5px;
    height:var(--left-side-real-height);
    cursor: w-resize;
    float:right;
    background-color:#000;
    z-index:20
  }

  #svgRight{
    width:200px;
    height:var(--left-side-real-height);
    float:right;
    overflow: auto;
    z-index:20;
    font-size:18px;
    font-weight:bold;
  }
</style>
