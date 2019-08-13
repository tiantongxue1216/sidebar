<template>
  <div class="container">
      <span class="navicon-con" @click="toggleClick" :style="{'width':shrink?'40px':'130px','padding-left': shrink?'8px':'65px','transform': 'rotateZ(' + (this.shrink ? '0' : '-180') + 'deg)'}">
        <Icon type="md-arrow-dropright" style="font-size: 20px;color:#49505F;"></Icon>
      </span>
      <div class="sidebar-menu-con" :style="{width: shrink?'64px':'214px', overflow: shrink ? 'visible' : 'auto'}">
        <shrinkable-menu
            :shrink="shrink"
            :menu-list="menuList"
            >
        </shrinkable-menu>
      </div>
      <div class="single-page-con" :style="{left: shrink?'40px':'130px'}">
        <div class="single-page">
          <router-view></router-view>
        </div>
      </div>
  </div>

</template>

<script>
import shrinkableMenu from '@/components/shrinkable-menu/shrinkable-menu.vue'
export default {
  components: {
    shrinkableMenu
  },
  data() {
    return {
      shrink: true,
      menuList: [
        // {
        //   children: [],
        //   icon: 'logo-buffer',
        //   name: 'dataCollection',
        //   title: '数据集'
        // },
        {
          children: [],
          icon: 'md-cube',
          name: 'models_manager',
          title: '模型'
        }
      ]
    }
  },

  methods: {
    // handleDataClick() {
    //   this.$router.push({ name: 'modeldataCollections' })
    // },
    // handleModelClick() {
    //   this.$router.push({ name: 'models', query: { tabPane: 'all'} })
    // },
    toggleClick () {
      this.shrink = !this.shrink
    },
  }
}
</script>

<style lang="less" scoped>
  // @import "./main.less";
  .container {
    .single-page-con{
        position: absolute;
        top: 43px;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background-color: #F7F9FB;
        overflow: scroll;
        z-index: 1;
        transition: left .3s;
        min-width: 1050px;
        .single-page{
            margin: 18px 10px 10px 10px;
            page-enter-active page-leave-active{
                transition: opacity 0.4s;
            }
            page-enter page-leave-to{
                opacity: 0
            }
        }
    }
  }
</style>


