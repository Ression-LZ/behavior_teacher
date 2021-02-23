<template>
  <div class="left-menu">
    <div class="menu-top">一体化课堂</div>
    <router-link to="/index"></router-link>
    <el-menu
        background-color="#222e3c"
        unique-opened
        text-color="#fff"
        active-text-color="#ffd04b">
      <template v-for="(item,index) in menuList">
        <router-link :to="item.path" v-if="!item.children&&!item.hidden" :key="index">
          <el-menu-item :index="index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-if="item.children&&!item.hidden" :key="index" :index="index+''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(subItem,subIndex) in item.children">
            <router-link :to="item.path+'/'+subItem.path" v-if="!subItem.hidden&&!subItem.children" :key="subIndex">
              <el-menu-item :index="index +'-'+ subIndex">
                <i :class="subItem.icon"></i>
                <span slot="title">{{ subItem.name }}</span>
              </el-menu-item>
            </router-link>
            <el-submenu v-if="subItem.children&&!item.hidden" :key="subIndex" :index="index +'-'+ subIndex">
              <template slot="title">
                <i :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </template>
              <router-link :to="item.path+'/'+subItem.path +'/'+subSubItem.path"
                           v-for="(subSubItem,subSubIndex) in subItem.children" :key="subIndex-subSubIndex">
                <el-menu-item :index="index +'-'+ subIndex +'-'+ subSubIndex" v-if="!subSubItem.hidden">
                  <i :class="subSubItem.icon"></i>
                  <span slot="title">{{ subSubItem.name }}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
    <div class="sidebar-cta-content">
      <strong class="d-inline-block mb-2">关于我们</strong>
      <div class="mb-3 text-sm">
        开发人员介绍
      </div>
      <a target="_blank" class="btn btn-outline-primary btn-block">联系我们</a>
    </div>
  </div>
</template>
<script>
import {routes} from '../../router/index'

export default {
  data () {
    return {
      menuList: []
    }
  },
  mounted () {
    this.menuList = routes[1].children
    console.log(this.menuList)
  }
}
</script>
<style>
.left-menu{
  background-color: #222e3c;
  position: fixed;
}
.menu-top{
  color: #ffffff;
  font-size: 20px;
  line-height: 50px;
  padding: 20px;
  font-weight: 600;
}
.el-menu{
  width: 250px;
}
.sidebar-cta-content{
  font-size: 15px;
  font-weight: 100;
}
</style>
