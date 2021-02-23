<template>
  <!--线下课上检测-->
  <div class="content" id="offline_ing">
    <div class="container-fluid p-0">
      <br>
      <br>
      <h1 class="h3 mb-3">线下行为检测</h1>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">摄像机摄取画面</h5>
              <h6 class="card-subtitle text-muted">本产品将自动识别学生在课上学习过程中的 <code>不规范行为</code> ，以检测学生学习状态。
              </h6>
            </div>
            <div class="table-responsive-1">
              <h2 class="text" style=" text-align:center;">摄像头放这里</h2>
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
                    <strong>运行成功！</strong> 系统将实时检测学生学习行为。
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
                    <button class="btn btn-pill btn-primary">开始检测</button>
                    <button class="btn btn-pill btn-warning">结束检测</button>
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
              <h6 class="card-subtitle text-muted">该功能将会针对整个课堂表现，实时生成班级行为分析报告。</h6>
            </div>
            <div class="card-body">
              <div class="chart chart-sm">
                <canvas id="chartjs-pie_offline_study"></canvas>
              </div>
            </div>

          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card flex-fill w-100">
            <div class="card-header">
              <h5 class="card-title">课堂情况趋势图</h5>
              <h6 class="card-subtitle text-muted">通过人工智能分析，自动评估学生课堂总体表现。</h6>
            </div>
            <div class="card-body">
              <div class="chart">
                <canvas id="chartjs-line_offline"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">课堂总体情况</h5>
              <h6 class="card-subtitle text-muted">包含课堂总人数、整体参与度、认真度等数据分析。 <code>日期</code></h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:75%;">数据分析</th>
                <th>参数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>课堂总人数：</td>
                <td>18</td>
              </tr>
              <tr>
                <td>整体参与度：</td>
                <td>0.5</td>
              </tr>
              <tr>
                <td>整体认真度：</td>
                <td>0.6</td>
              </tr>
              <tr>
                <td>观测开始时间：</td>
                <td>21：53:13</td>
              </tr>
              <tr>
                <td>观测总时长：</td>
                <td>89</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生总体情况扇形图</h5>
              <h6 class="card-subtitle text-muted">具体分析每一位学生的行为状态，判断行为占比。</h6>
            </div>
            <div class="card-body">
              <div class="chart chart-sm">
                <canvas id="chartjs-pie_offline_class_study"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生总体情况</h5>
              <h6 class="card-subtitle text-muted">包含书写总人次数、玩手机总人次数、传递纸条总人次数等数据分析。 <code>日期</code>
              </h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:75%;">线下行为检测数据分析</th>
                <th>参数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>线下书写总人次数：</td>
                <td>25</td>
              </tr>
              <tr>
                <td>线下放包总人次数：</td>
                <td>5</td>
              </tr>
              <tr>
                <td>线下玩手机总人次数：</td>
                <td>7</td>
              </tr>
              <tr>
                <td>线下看纸条总人次数：</td>
                <td>13</td>
              </tr>
              <tr>
                <td>线下传递纸条总人次数：</td>
                <td>6</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生个人行为扇形图</h5>
              <h6 class="card-subtitle text-muted">具体分析单个学生的行为状态，判断行为占比。</h6>
              <br>
              <div class="form-group row">
                <label class="col-form-label col-sm-2 text-sm-right">搜索：</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" placeholder="请输入学号">
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="chart chart-sm">
                <canvas id="chartjs-doughnut_offline_students"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生单个情况</h5>
              <h6 class="card-subtitle text-muted">该功能将会针对单个学生的课堂表现，生成个人的分析报告。 <code>日期</code></h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:75%;">数据分析</th>
                <th>参数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>个人参与度：</td>
                <td>0.6</td>
              </tr>
              <tr>
                <td>个人认真度：</td>
                <td>0.8</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
</script>
<style>
</style>
