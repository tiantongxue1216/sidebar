<style lang="less">
    @import '../styles/menu.less';
</style>

<template>
    <Menu ref="sideMenu" :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
        <template v-for="item in menuList">
            <Submenu v-if="item.children && item.children.length > 1" :name="item.name" :key="item.name">
                <template slot="title">
                    <Icon :type="item.icon" size="18"></Icon>
                    <span class="layout-text">{{ itemTitle(item) }}</span>
                </template>
                <template v-for="child in item.children">
                    <MenuItem :name="child.name" :key="'menuitem' + child.name">
                        <Icon :type="child.icon" :key="'icon' + child.name" size="18"></Icon>
                        <span class="layout-text" :key="'title' + child.name">{{ child.title }}</span>
                    </MenuItem>
                </template>
            </Submenu>
            <Submenu v-else-if="item.children.length === 1" :name="item.name" :key="item.name">
                <template slot="title">
                    <Icon :type="item.icon" size="18"/>
                    <span class="layout-text">{{ itemTitle(item) }}</span>
                </template>
                <template>
                    <MenuItem :name="item.name" :key="'menuitem' + item.name">
                        <Icon :type="item.icon" size="18"></Icon>
                        <span class="layout-text">{{ item.name }}</span>
                    </MenuItem>
                </template>
            </Submenu>
            <MenuItem v-else :name="item.name" :key="'menuitem' + item.name">
                <Icon :type="item.icon" size="18"></Icon>
                <span class="layout-text" :key="'title' + item.name">{{ itemTitle(item) }}</span>
            </MenuItem>
        </template>
    </Menu>
</template>

<script>
export default {
    name: 'sidebarMenu',
    props: {
        menuList: Array,
        iconSize: Number,
        menuTheme: {
            type: String,
            default: 'light'
        },
        openNames: {
            type: Array
        }
    },
    methods: {
        changeMenu (active) {
            this.$emit('on-change', active);
        },
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    },
    updated () {
        this.$nextTick(() => {
            if (this.$refs.sideMenu) {
                this.$refs.sideMenu.updateOpened();
            }
        });
    }
};
</script>
