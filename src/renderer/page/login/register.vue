<template>
  <div class="login_form">
    <div id="set" style="-webkit-app-region: drag">一体化课堂|学生注册</div>
    <el-form label-width="130px" label-position="left">
      <el-form-item label="学号:" required>
        <el-input v-model="student.studentNumber" placeholder="请输入你的11位学号"></el-input>
      </el-form-item>
      <el-form-item label="姓名:" required>
        <el-input v-model="student.name" placeholder="请填写您的真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别:" required>
        <template>
          <el-select v-model="student.sex" placeholder="请选择..">
            <el-option
                v-for="item in sex"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="密码:" required>
        <el-input placeholder="请输入密码" v-model="student.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" required>
        <el-input placeholder="请输入密码" v-model="student.subPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="学校:" required>
        <template>
          <el-select placeholder="请选择学校" v-model="schoolIndex" @change="getGrade">
            <el-option
                v-for="(school,index) in schools"
                :key="index"
                :label="school.schoolName"
                :value="index">
            </el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="年级:" required>
        <template>
          <el-select v-model="gradeIndex" placeholder="请选择年级" @change="getClass">
            <el-option
                v-for="(grade,index) in grades"
                :key="index"
                :label="grade.gradeName+'-'+grade.enrollmentYear"
                :value="index">
            </el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="班级:" required>
        <template>
          <el-select v-model="student.classId" placeholder="请选择班级">
            <el-option
                v-for="mclass in classes"
                :key="mclass.id"
                :label="mclass.classNo"
                :value="mclass.id">
            </el-option>
          </el-select>
        </template>
      </el-form-item>
      <div class="btn_group">
        <label class="label_field hidden">hidden label</label>
        <input type="button" class="main_bt" id="cancel_login" @click="exit" value="退出"/>
        <input type="button" class="main_bt" id="register_btn" @click="doRegister" value="注册"/>
      </div>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
import {Message} from 'element-ui'

const ipcRenderer = require('electron').ipcRenderer
export default {
  data () {
    return {
      student: {
        'classId': '',
        'name': '',
        'password': '',
        'subPassword': '',
        'sex': '',
        'studentNumber': ''
      },
      schools: [],
      grades: [],
      classes: [],
      'sex': [
        '男',
        '女'
      ],
      schoolIndex: '',
      gradeIndex: '',
      classIndex: ''
    }
  },
  methods: {
    doRegister () {
      if (this.student.password !== this.student.subPassword) {
        Message.error('两次密码不相同')
        return
      }
      axios.post('/student/register', this.student).then(function (response) {
        let data = response.data
        console.log(response)
        if (data.success) {
          Message.success('注册成功')
        } else {
          Message.error(data.message)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    exit () {
      ipcRenderer.send('close')
    },
    getSchool () {
      let that = this
      axios({
        methods: 'get',
        url: '/student/schools'
      }).then(function (response) {
        that.schools = response.data.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    getGrade () {
      this.gradeIndex = ''
      this.classIndex = ''
      this.student.classId = ''
      this.grades = this.schools[this.schoolIndex].grade
    },
    getClass () {
      this.classIndex = ''
      this.student.classId = ''
      this.classes = this.grades[this.gradeIndex].classes
    }
  },
  mounted () {
    this.getSchool()
  }
}
</script>
<style>
@import "../../assets/css/style.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/responsive.css";

.login_form {
  background-color: #eeeeee;
}

.el-input {
  width: 350px;
}
#set{
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: -25px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  font-style: revert;
}
</style>
