<template>
  <div class="g-header">
    <span class="logo">
      <img src="../../../assets/img/logo.svg">
      工业大数据建模平台&nbsp;&nbsp;&nbsp;&nbsp;V1.3
    </span>
    <span class="logon">
      <span v-if="userLogonFlag">
        <Icon type="md-person" size="14"></Icon>
        {{username}}
        <img src="../../../assets/img/logout.png" width="18" height="18" class="u-logout-icon"
             title="退出登录" @click="readyForLogout"></MenuItem>
      </span>
      <span v-else>
        <span class="u-logon-icon" @click="readyForLogon">登录</span>
      </span>

    </span>
  </div>
</template>
<style>

</style>
<style lang="less" scoped>
  .g-header {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .logo {
      position:fixed;
      float:left;
      top:0;
      left:25px;
      color: #dedede;
      font-size: 14px;
      height:40px;
      line-height:40px;
      cursor:default;
      z-index:999;
      img {
        width: 18px;
        position: relative;
        top: 3px;
        right: 4px;
      }
    }
    .logon {
      position:fixed;
      float:right;
      top:0;
      font-size:16px;
      color:#dedede;
      right:25px;
      height:40px;
      line-height:40px;
    }
  }

  .u-logon-icon {
     cursor:pointer;
     color:#dedede;
     font-size:14px;
   }

  .u-logout-icon {
    cursor:pointer;
    margin-top: -2px;
    margin-left:15px;
    vertical-align: middle;
  }
</style>
<script>
  export default {
    data() {
      return {
        userLogonFlag:false,
        username:'luchen'
      };
    },
    watch: {
      '$route.path': function () {
        //console.log('$route.path='+this.$router.path)
        //this.todo();
      },
    },
    mounted: function () {

    },
    methods: {
      //执行用户登录
      readyForLogon() {
        //this.userLogonFlag = true;
        this.$parent.showUserLogonPage();
      },

      //执行用户退出登录
      readyForLogout(){
        this.userLogonFlag = false;
        this.$parent.showUserLogonPage();
      }
    }
  };
</script>
