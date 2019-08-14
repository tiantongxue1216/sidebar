<style lang="less">
  @import './main.less';
</style>

<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="main-header-con">
      <div class="main-header">
        <div class="logo">
          <span>工业大数据建模平台v1.3</span>
        </div>
        <div class="header-avator-con">
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Dropdown transfer trigger="click">
                <a href="javascript:void(0)">
                  <span class="main-user-name">{{ userName }}</span>
                  <Icon type="arrow-down-b" color=""></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar icon="person" style="background: #619fe7;margin-left:10px;transform: scale(0.75);"></Avatar>
            </Row>
          </div>
        </div>
      </div>
    </div>

    <div class="navicon-con" @click="toggleClick" :style="{'width':shrink?'60px':'200px','transform': 'rotateZ(' + (this.shrink ? '0' : '-180') + 'deg)'}">
      <Icon type="md-arrow-dropright" style="font-size: 18px;color:#49505F;"/>
    </div>
    <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <shrinkable-menu
        :shrink="shrink"
        :menu-list="menuList"
        :theme="dark">
      </shrinkable-menu>
    </div>

    <div class="single-page-con" :style="{left: shrink?'70px':'200px'}">
      <div class="single-page">
        <!-- <transition name="page" mode="out-in"> -->
          <!-- <keep-alive key="keep" v-if="$route.meta.keepAlive"> -->
              <router-view></router-view>
          <!-- </keep-alive> -->
          <!-- <router-view key="nokeep" v-if="!$route.meta.keepAlive"></router-view> -->
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import shrinkableMenu from '@/components/shrinkable-menu/shrinkable-menu.vue'
  export default {
    name: 'main',
    components: {
      shrinkableMenu
    },
    data() {
      return {
        shrink: true,
        userName: 'tianlixin',
        menuList: [
        {
          children: [],
          icon: 'logo-buffer',
          name: 'Project',
          title: '工程'
        },
        {
          children: [],
          icon: 'md-cube',
          name: 'Task',
          title: '任务'
        },
        {
          children: [],
          icon: 'md-cube',
          name: 'DataSet',
          title: '数据集'
        },
        {
          children: [],
          icon: 'md-cube',
          name: 'Model',
          title: '模型'
        }
      ]
      }
    },
    methods: {
      toggleClick () {
        this.shrink = !this.shrink
      },
    }
  }
</script>

