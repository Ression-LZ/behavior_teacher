<template>
  <div class="wrapper">
    <div class="menu">
      <left-menu></left-menu>
    </div>
    <div class="main" >
      <nav class="base-top" style="z-index: 2;position: fixed;width: 81%;-webkit-app-region:drag">
        <top-content></top-content>
      </nav>

      <!--嵌入页面-->
      <div class="content" style="z-index: 0">
        <router-view></router-view>
      </div>

      <footer class="footer" style="z-index: 2 ;bottom: 0;position: fixed;width: 81%">
        <bottom-content></bottom-content>
      </footer>
    </div>
  </div>
</template>
<script>
import LeftMenu from './left-menu'
import TopContent from './top-content'
import BottomContent from './bottom-content'
export default {
  components: {BottomContent, TopContent, LeftMenu}
}
</script>
<style>
@import "../../assets/css/app.css";
.wrapper{
  width: 100%;
}
.content{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.menu{
  width: 310px;
}
.base-top{
  background-color: #ffffff;
}
</style>
