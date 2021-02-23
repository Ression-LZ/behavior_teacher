<template>
  <!--首页-->
  <div class="content" id="indexPage" style="display: block;">
    <div class="container-fluid p-0">
      <br>
      <br>
      <h1 class="h3 mb-3">一体化课堂首页</h1>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="images/unsplash-1.jpg" alt="Unsplash">
            <div class="card-header">
              <h5 class="card-title mb-0">基于数据的课堂</h5>
            </div>
            <div class="card-body">
              <p class="card-text">依据学生学习行为大数据挖掘分析与决策，用直观的数据了解学生对知识掌握的水平，精准地掌握来自学生的第一手学情资料。</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="images/unsplash-2.jpg" alt="Unsplash">
            <div class="card-header">
              <h5 class="card-title mb-0" @click="fs">高效互动的课堂</h5>
            </div>
            <div class="card-body">
              <p class="card-text">利用智能化的移动学习工具和应用支撑平台，教师与学生、学生与学生之间的沟通与交流更加立体化，能无障碍地进行即时交流和互动。</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="images/unsplash-3.jpg" alt="Unsplash">
            <div class="card-header">
              <h5 class="card-title mb-0">动态开放的课堂</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">借助于新兴信息技术及各种智能终端</li>
              <li class="list-group-item">实现更为开放的教室、更为开放的课堂活动</li>
              <li class="list-group-item">让课前、课中、课后融为一体</li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="images/unsplash-2.jpg" alt="Unsplash">
            <div class="card-header">
              <h5 class="card-title mb-0">合作探究的课堂</h5>
            </div>
            <div class="card-body">
              <p class="card-text">帮助有相同学习需求和兴趣的学习者自动形成学习共同体，教师可以通过平台对小组合作进行实时的数字化评价和及时的反馈。</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="images/unsplash-2.jpg" alt="Unsplash">
            <div class="card-header">
              <h5 class="card-title mb-0">个性化学习的课堂</h5>
            </div>
            <div class="card-body">
              <p class="card-text">实现对学生的个性化学习能力的评估，有针对性地制定教学方案和辅导策略，真正实现“一对一”的个性化教学。</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="images/unsplash-2.jpg" alt="Unsplash">
            <div class="card-header">
              <h5 class="card-title mb-0">教学机智的课堂</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">基于动态学习数据分析和即时反馈</li>
              <li class="list-group-item">及时调整课前的教学设计</li>
              <li class="list-group-item">优化和改进课堂教学进程</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
import {csend} from '../../assets/js/c'
export default {
  methods: {
    fs () {
      csend('online_check_in')
    }
  }
}
</script>
<style>
</style>
