<template>
  <!--线下课下检测-->
  <div class="content" id="offline_after">
    <div class="container-fluid p-0">
      <br>
      <br>
      <h1 class="h3 mb-3">线下行为检测</h1>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">摄像机摄取画面</h5>
              <h6 class="card-subtitle text-muted">本产品将自动识别学生在课后教室活动过程中的 <code>不规范行为</code> ，以防止学生在课间玩耍时造成危险行为。
              </h6>
            </div>
            <div class="table-responsive-1">
              <h2 class="text" style=" text-align:center;">摄像头放这里</h2>
              <img id="show" src="" alt="">
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">检测提示</h5>
              <h6 class="card-subtitle text-muted">请按时开启行为检测功能！</h6>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <div class="alert alert-primary alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="alert-icon">
                    <i class="far fa-fw fa-bell"></i>
                  </div>
                  <div class="alert-message">
                    <strong>运行成功！</strong> 系统将会实时检测学生危险行为。
                  </div>
                </div>
                <div class="alert alert-secondary alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="alert-icon">
                    <i class="far fa-fw fa-bell"></i>
                  </div>
                  <div class="alert-message">
                    <strong>运行失败！</strong> 若是技术或网络问题请及时向管理员反馈！
                  </div>
                </div>
                <div class="card-body text-center">
                  <div class="mb-3">
                    <button class="btn btn-pill btn-primary" @click="start">开始检测</button>
                    <button class="btn btn-pill btn-warning" @click="stop">结束检测</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">班级行为检测分析</h5>
              <h6 class="card-subtitle text-muted">该功能将会针对整个课下表现，实时生成班级行为分析报告。</h6>
            </div>
            <div class="card-body">
              <div class="alert alert-primary alert-dismissible" v-show="seen_" role="alert">
                  <button type="button" class="close" @click="closeDanger" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="alert-icon">
                    <i class="far fa-fw fa-bell"></i>
                  </div>
                  <div class="alert-message">
                    <strong>警告！</strong> 检测到学生有危险行为发生
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {csend} from '../../assets/js/c'
import {startlisten} from '../../assets/js/vue_listener'

export default {
  data () {
    return {
      seen_: false
    }
  },
  methods: {
    start () {
      startlisten(this)
      csend('offlineBehaviorAfterStart')
    },
    stop () {
    },
    closeDanger () {
      this.seen_ = false
    }
  }
}
</script>
<style>
</style>
