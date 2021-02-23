<template>
  <!--线上行为检测-->
  <div class="content" id="online_behaviorPage">
    <div class="container-fluid p-0">
      <br>
      <br>
      <h1 class="h3 mb-3">线上行为检测</h1>

      <div class="row">
        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">开启线上行为检测</h5>
              <h6 class="card-subtitle text-muted" v-if="!state">请选择课程，点击开始检测按钮，开启本次线上行为检测</h6>
              <h6 class="card-subtitle text-muted" v-if="state">点击结束检测按钮，结束本次行为检测信息</h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:60%;">线上行为检测数据</th>
                <th>参数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>课堂名称：</td>
                <td>
                  <el-select v-model="courseName" placeholder="课程名称" :disabled="state">
                    <el-option
                        v-for="item in course"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr v-if="state">
                <td>课堂总人数：</td>
                <td>{{ courseCount }}</td>
              </tr>
              <tr v-if="state">
                <td>检测开始时间：</td>
                <td>{{ onlineBehavior.behaviorStartTime }}</td>
              </tr>
              <tr v-if="state">
                <td>检测持续时长：</td>
                <td>{{ last }}</td>
              </tr>
              <tr>
                <td>
                  <button class="btn btn-pill btn-primary" v-if="!state && courseName" @click="beginBehavior">开始检测
                  </button>
                </td>
                <td>
                  <button class="btn btn-pill btn-warning" v-if="state" @click="stopBehavior">结束检测</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">线上行为检测相关通知</h5>
              <h6 class="card-subtitle text-muted" v-if="state">
                更新频率：1分钟<br>
                最长检测时长：2小时<br>
              </h6>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <div class="alert alert-success alert-dismissible" role="alert" v-if="state">
                  <div class="alert-message">
                    <strong>检测行为已开启</strong> 请老师提醒学生尽快开启摄像头。
                  </div>
                </div>
                <div class="alert alert-primary alert-dismissible" role="alert" v-if="state || end">
                  <div class="alert-message">
                    <strong>行为检测持续时长：</strong> {{ last }}
                  </div>
                </div>
                <div class="alert alert-secondary alert-dismissible" role="alert" v-if="!state">
                  <div class="alert-message">
                    <strong>通知消息：</strong>{{ message }}
                  </div>
                </div>
                <button id="upBtn" class="btn btn-pill btn-primary" v-if="state" @click="getBehaviorNow">手动更新数据</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6" v-if="state || end">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生总体情况</h5>
              <h6 class="card-subtitle text-muted">包含书写总人次数、玩手机总人次数、传递纸条总人次数等数据分析。
              </h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:60%;">线上行为检测数据</th>
                <th>参数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>线上睡觉总人次数：</td>
                <td>{{ onlineBehavior.sleepCount }}次</td>
              </tr>
              <tr>
                <td>线上说话总人次数：</td>
                <td>{{ onlineBehavior.talkCount }}次</td>
              </tr>
              <tr>
                <td>线上旷课总人次数：</td>
                <td>{{ onlineBehavior.outCount }}次</td>
              </tr>
              <tr>
                <td>线上走神总人次数：</td>
                <td>{{ onlineBehavior.leaveCount }}次</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-lg-6" v-if="state || end">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生总体情况扇形图</h5>
              <h6 class="card-subtitle text-muted">具体分析本次课程各种行为占比。</h6>
            </div>
            <div class="card-body">
              <v-chart id="all-chart" :options="polar"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6" v-if="state || end">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生单个情况</h5>
              <h6 class="card-subtitle text-muted">您可以选择本次课程中的所有学生，查看学生的具体行为信息</h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:60%;">个人线上行为检测数据</th>
                <th>参数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>学生姓名：</td>
                <td>
                  <el-select v-model="index" placeholder="学生姓名" value-key="student" @change="updateStudentBehavior">
                    <el-option
                        v-for="(onlineStudent,index) in onlineBehavior.onlineStudents"
                        :key="onlineStudent"
                        :label="onlineStudent.student"
                        :value="index">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr v-if="student">
                <td>线上睡觉次数：</td>
                <td>{{ onlineStudent.sleepCount }}次
                  (占比:{{ onlineStudent.sleepPro }}%)
                </td>
              </tr>
              <tr>
                <td>线上说话次数：</td>
                <td>{{ onlineStudent.talkCount }}次
                  (占比:{{ onlineStudent.talkPro }}%)
                </td>
              </tr>
              <tr>
                <td>线上旷课次数：</td>
                <td>{{ onlineStudent.leaveCount }}次
                  (占比:{{ onlineStudent.leavePro }}%)
                </td>
              </tr>
              <tr>
                <td>线上走神次数：</td>
                <td>{{ onlineStudent.outCount }}次
                  (占比:{{ onlineStudent.outPro }}%)
                </td>
              </tr>
              <tr>
                <td>认真度：</td>
                <td>{{ onlineStudent.studyPro }}%</td>
              </tr>
              <tr>
                <td>参与度：</td>
                <td>{{ onlineStudent.degreePro }}%</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-lg-6" v-if="state || end">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生个人行为扇形图</h5>
              <h6 class="card-subtitle text-muted">具体分析单个学生的行为状态，判断行为占比。</h6>
              <br>
            </div>
            <div class="card-body">
              <v-chart id="student-chart" :options="option"/>
            </div>
          </div>
        </div>
        <div class="col-12" v-if="state || end">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">线上行为检测时间趋势图</h5>
              <h6 class="card-subtitle text-muted">
                线上行为检测以3分钟为间隔，统计每段时间间隔内，各种行为的统计量
              </h6>
            </div>
            <v-chart :options="timePolar" style="width: 900px;"></v-chart>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import ECharts from 'vue-echarts'
import 'echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import axios from 'axios'
import {Message} from 'element-ui'

export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      index: null,
      last: '',
      student: '',
      state: false,
      end: false,
      message: '',
      courseName: '',
      course: [],
      courseCount: '0',
      onlineBehavior: {
        'behaviorStartTime': '暂无数据',
        'lastTime': 0,
        'sleepCount': 0,
        'talkCount': 0,
        'leaveCount': 0,
        'outCount': 0,
        onlineStudents: []
      },
      onlineStudent: {
        'sleepCount': 0,
        'talkCount': 0,
        'leaveCount': 0,
        'outCount': 0,
        'student': '',
        'sleepPro': 0,
        'talkPro': 0,
        'leavePro': 0,
        'outPro': 0,
        'studyPro': 0,
        'degreePro': 0
      },
      behaviorChartData: [
        {value: 0, name: '睡觉次数'},
        {value: 735, name: '说话次数'},
        {value: 580, name: '走神次数'},
        {value: 484, name: '旷课次数'}
      ],
      polar: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          top: '20%',
          right: '20%'
        },
        series: {
          name: '学生总体情况',
          type: 'pie',
          center: ['35 %', '38%'],
          radius: ['30%', '55%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '25',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: []
        }
      },
      option: {
        grid: {
          top: '20%'
        },
        width: '300px',
        height: '220px',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          top: '2%',
          left: 'center'
        },
        xAxis: [
          {
            type: 'category',
            data: ['睡觉', '说话', '走神', '旷课'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '次数',
            min: 0,
            interval: 50,
            splitLine: {show: false},
            axisLabel: {
              formatter: '{value} 次'
            }
          },
          {
            type: 'value',
            name: '占比',
            min: 0,
            max: 100,
            interval: 20,
            splitLine: {show: false},
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '次数',
            type: 'bar',
            data: [0, 0, 0, 0]
          },
          {
            name: '占比',
            type: 'line',
            yAxisIndex: 1,
            data: [0, 0, 0, 0]
          }
        ]
      },
      timePolar: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['走神次数', '瞌睡次数', '说话次数', '旷课次数']
        },
        grid: {
          left: '3%',
          right: '8%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name: '时间',
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: []
      }
    }
  },
  methods: {
    getCourse () {
      let that = this
      axios.get('/teacher/course').then((res) => {
        that.course = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    getBehaviorNow () {
      let that = this
      axios.get('/teacher/online/now').then((res) => {
        if (res.data.success === true) {
          that.onlineBehavior = res.data.data
          that.courseCount = res.data.data.onlineStudents.length
          that.courseName = res.data.data.course.courseName
          that.state = true
          that.convertLast()
          that.drawBehaviorChart()
          that.updateStudentBehavior()
          that.drawTimeChart()
          return
        }
        that.message = res.data.message
        if (that.state === true) {
          that.end = true
          that.message = '成功关闭线上行为检测，查看本次课更多信息请前往分析报告'
        }
        that.state = false
      }).catch((err) => {
        that.message = err
        console.log(err)
      })
    },
    beginBehavior () {
      axios({
        method: 'post',
        url: '/teacher/online/begin',
        params: {
          courseName: this.courseName
        }
      }).then((res) => {
        if (res.data.success) {
          Message.success('成功开启线上行为检测')
          this.getBehaviorNow()
        } else {
          Message.error(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    stopBehavior () {
      axios.post('/teacher/online/stop').then(() => {
        this.getBehaviorNow()
        Message.success('成功关闭线上行为检测')
      }).catch((err) => {
        console.log(err)
      })
    },
    updateBehavior () {
      setInterval(() => {
        if (this.state === true) {
          this.getBehaviorNow()
        }
      }, 60000)
    },
    updateStudentBehavior () {
      if (this.index === null) {
        return
      }
      this.onlineStudent = this.onlineBehavior.onlineStudents[this.index]
      this.drawStudentChart()
    },
    convertLast () {
      let lt = this.onlineBehavior.lastTime
      let timeMin = 60
      let timeHours = timeMin * 60
      let hours = Math.floor(lt / timeHours)
      let minutes = Math.floor((lt % timeHours) / timeMin)
      this.last = ''
      if (hours !== 0) {
        this.last = hours + '小时'
      }
      this.last += minutes + '分钟'
    },
    drawBehaviorChart () {
      this.behaviorChartData[0].value = this.onlineBehavior.sleepCount
      this.behaviorChartData[1].value = this.onlineBehavior.talkCount
      this.behaviorChartData[2].value = this.onlineBehavior.outCount
      this.behaviorChartData[3].value = this.onlineBehavior.leaveCount
      this.polar.series.data = this.behaviorChartData
    },
    drawStudentChart () {
      let barData = []
      barData.push(this.onlineStudent.sleepCount)
      barData.push(this.onlineStudent.talkCount)
      barData.push(this.onlineStudent.outCount)
      barData.push(this.onlineStudent.leaveCount)
      let lineData = []
      lineData.push(this.onlineStudent.sleepPro)
      lineData.push(this.onlineStudent.talkPro)
      lineData.push(this.onlineStudent.outPro)
      lineData.push(this.onlineStudent.leavePro)
      this.option.series[0].data = barData
      this.option.series[1].data = lineData
    },
    drawTimeChart () {
      let that = this
      axios.get('/teacher/online/charts/now').then((res) => {
        let chartData = res.data.data
        let chartDate = []
        let length = chartData[0].data.length
        that.timePolar.series = chartData
        for (let i = 0; i < length; i++) {
          chartDate.push(i * 3)
        }
        that.timePolar.xAxis.data = chartDate
      }).catch((err) => {
        that.message = err
        console.log(err)
      })
    }
  },
  mounted () {
    this.getCourse()
    this.getBehaviorNow()
  },
  updated () {
    this.updateBehavior()
  }
}
</script>
<style>
.echarts {
  width: 20%;
  height: 20%;
}

#all-chart {
  margin-left: -80px;
  margin-top: -50px;
  margin-bottom: -145px;
}

#student-chart {
  margin-top: -50px;
  margin-bottom: -70px;
}

#upBtn {
  margin-top: 10px;
  margin-bottom: 55px;
}
</style>
