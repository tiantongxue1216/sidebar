<template>
  <div>
    <div style="margin:10px;margin-top:60px;width:100%;height:100%;text-align:center">
      <img src="/static/mock/user_logon.png">
    </div>

    <div id="mock_logon_user" @click="mock_logon"></div>
    <div id="mock_register_user" @click="mock_register"></div>
  </div>
</template>
<script>
  export default {
    name: 'user-logon',
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
        content: '这是 用户登录 页面',
        duration: 3
      });
      this.locateOneElement("mock_logon_user",515,243,351,70);
      this.locateOneElement("mock_register_user",610,375,175,35);
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

      mock_logon(){
        this.$parent.userLogonFlag = true;
        this.$parent.$refs.commonHeader.userLogonFlag = true;
        this.$router.push('/')
        setTimeout(()=>{
          this.$parent.$refs.leftSide.currentSelectedIndex = 0;
          this.$router.push("/Project");
        },200)
      },

      mock_register(){
        this.$router.push("/UserRegister");
      },
    }
  }
</script>

<style>
  #mock_logon_user{
    position:absolute;
    z-index:1;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
  #mock_register_user{
    position:absolute;
    z-index:2;
    background:rgba(220,20,60,0.01);
    cursor:pointer;
  }
</style>
