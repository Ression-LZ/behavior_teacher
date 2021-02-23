<template>
  <div class="login">
    <div class="logo_login" style="-webkit-app-region: drag">
      <div class="center">
        <img id="my-logo" src="~@/assets/logo.png" alt="#"/>
      </div>
    </div>
    <div class="login_form">
      <form id="login_form">
        <fieldset>
          <div class="field">
            <label class="label_field">工号:</label>
            <input type="text" v-model="teacher.teacherNumber" placeholder="请输入您的教学工号"/>
          </div>
          <div class="field">
            <label class="label_field">密码:</label>
            <input type="password" v-model="teacher.password" placeholder="请输入密码"/>
          </div>
          <div class="field">
          </div>
          <div class="btn_group">
            <label class="label_field hidden">hidden label</label>
            <input type="button" class="main_bt" id="exit_btn" @click="exit" value="退出"/>
            <input type="button" class="main_bt" id="login_btn" @click="doLogin" value="登录"/>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {Message} from 'element-ui'

const ipcRenderer = require('electron').ipcRenderer
export default {
  data () {
    return {
      teacher: {
        teacherNumber: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin () {
      axios({
        method: 'post',
        url: '/teacher/login',
        data: this.teacher
      }).then(function (response) {
        console.log(response)
        let data = response.data
        if (data.success) {
          Message.success('登录成功')
          ipcRenderer.send('login-success')
        } else {
          Message.error(data.message)
        }
      }).catch(function (error) {
        Message.error(error)
      })
    },
    doRegister () {
      ipcRenderer.send('do-register')
    },
    exit () {
      ipcRenderer.send('close')
    }
  }
}
</script>
<style>
.login_form{
  background-color: #eeeeee;
}
#my-logo {
  width: 150px;
  height: 80px;
}
.register{
  background-color: #eeeeee;
  float: right;
  color: #ff5722;
  border: none;
  font-size: 15px;
  font-weight: 300;
}
@import "../../assets/css/style.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/responsive.css";
</style>
