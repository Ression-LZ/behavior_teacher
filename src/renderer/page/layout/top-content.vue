<template>
  <div class="top-card" >
    <el-dropdown class="top-info" :hide-on-click="false" style="-webkit-app-region:no-drag">
      <span class="el-dropdown-link" >
          <el-avatar size="60" :src=teacher.avatar></el-avatar>
    </span>
      <el-dropdown-menu slot="dropdown" size="medium">
        <el-dropdown-item disabled>工号：{{ this.teacher.teacherNumber }}</el-dropdown-item>
        <el-dropdown-item disabled>姓名：{{ this.teacher.name }}</el-dropdown-item>
        <el-dropdown-item disabled>性别：{{ this.teacher.sex }}</el-dropdown-item>
        <el-dropdown-item divided>
          教授课程：
        </el-dropdown-item>
        <template v-model="class_">
          <el-dropdown-item disabled v-for="name in class_">{{ name }}</el-dropdown-item>
        </template>
        <el-dropdown-item divided @click="updateAvatar">
          <el-link :underline="false" @click="updateAvatar">更改头像</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link :underline="false" @click="exit">退出</el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="name">{{ this.teacher.name }}</div>
  </div>
</template>
<script>
import axios from 'axios'
import {Notification} from 'element-ui'

const ipcRenderer = require('electron').ipcRenderer
export default {
  data () {
    return {
      teacher: {
        name: '',
        sex: '',
        teacherNumber: '',
        avatar: ''
      },
      class_: []
    }
  },
  methods: {
    getInfo () {
      let that = this
      axios.get('/teacher/info').then((res) => {
        console.log(res)
        that.teacher = res.data.data
      }).catch((err) => {
        console.log(err)
      })
      axios.get('/teacher/course').then((res) => {
        console.log(res)
        that.class_ = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    exit () {
      ipcRenderer.send('close')
    },
    updateAvatar () {
      Notification({
        message: '该功能正在抓紧开发中',
        position: 'bottom-right'
      })
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style>
.name {
  float: right;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  margin-right: 20px;
}

.top-card {
  padding: 10px;
  width: 100%;
}

.top-info {
  float: right;
}
</style>
