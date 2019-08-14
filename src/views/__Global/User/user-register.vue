<template>
  <div>
    <div style="margin:10px;margin-top:60px;width:100%;height:100%;text-align:center">
      <img :src="'/static/mock/register_'+ri+'.png'">
    </div>

    <div id="id_mock_register" @click="mock_register_next"></div>
    <div id="id_mock_logon" @click="mock_logon_again"></div>
  </div>
</template>
<script>
  export default {
    name: 'user-logon',
    components: {},
    props:[],
    data() {
      return {
        ri:1
      }
    },
    computed: {},
    watch: {},
    created: function(){

    },
    mounted: function () {
      this.$Message.destroy();
      this.$Message.info({
        content: '这是 用户注册 页面',
        duration: 3
      });
      this.locateOneElement("id_mock_register",604,282,178,59);
      this.locateOneElement("id_mock_logon",618,383,137,26);
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

      mock_register_next(){
        this.ri += 1;
        if(this.ri>3){
          this.mock_logon_again();
        }
      },
      mock_logon_again(){
        this.$router.push("/UserLogon");
      },
    }
  }
</script>

<style>
  #id_mock_register{
    position:absolute;
    z-index:1;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
  #id_mock_logon{
    position:absolute;
    z-index:2;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
</style>
