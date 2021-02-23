<template>
  <!--线上签到-->
  <div class="content" id="online_checkinPage">
    <div class="container-fluid p-0">
      <br>
      <br>
      <h1 class="h3 mb-3">线上课堂点名</h1>

      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">签到按钮</h5>
              <h6 class="card-subtitle text-muted">老师将规定具体签到时间，中途无法终止签到。</h6>
            </div>
            <div class="card-body">
              <select class="form-control mb-3">
                <option selected>请选择规定签到时间</option>
                <option>5 min</option>
                <option>10 min</option>
                <option>15 min</option>
                <option>20 min</option>
                <option>25 min</option>
                <option>30 min</option>
              </select>
              <div class="card-body text-center">
                <div class="mb-3">
                  <button class="btn btn-pill btn-primary">开始签到</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">运行提示</h5>
              <h6 class="card-subtitle text-muted"></h6>
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
                    <strong>运行成功！</strong> 系统正在自动识别人脸点名！
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
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">签到成功</h5>
              <h6 class="card-subtitle text-muted">按时签到的学生的信息将会放置在这里。</h6>
            </div>
            <table class="table">
              <thead>
              <tr>
                <th style="width:25%;">姓名</th>
                <th style="width:25%;">学号</th>
                <th class="d-none d-md-table-cell" style="width:30%">签到时间</th>
                <th style="width:20%;">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>卢仲</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">June 21, 1961</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>张飒名</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">May 15, 1948</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>哑奴与</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">September 14, 1965</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>季华园</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">April 2, 1971</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>罗志思</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">October 12, 1966</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">签到迟到</h5>
              <h6 class="card-subtitle text-muted">学生没有按时签到，造成 <code>迟到行为</code>。 </h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:25%;">姓名</th>
                <th style="width:25%;">学号</th>
                <th class="d-none d-md-table-cell" style="width:30%">签到时间</th>
                <th style="width:20%;">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>卢仲</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">June 21, 1961</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>张飒名</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">May 15, 1948</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>哑奴与</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">September 14, 1965</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>季华园</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">April 2, 1971</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>罗志思</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">October 12, 1966</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">旷课行为</h5>
              <h6 class="card-subtitle text-muted">正式上课15分钟内没有签到成功， <code>系统自动判定旷课</code> 。</h6>
            </div>
            <table class="table">
              <thead>
              <tr>
                <th style="width:25%;">姓名</th>
                <th style="width:25%;">学号</th>
                <th class="d-none d-md-table-cell" style="width:30%">签到时间</th>
                <th style="width:20%;">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>卢仲</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">June 21, 1961</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>张飒名</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">May 15, 1948</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>哑奴与</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">September 14, 1965</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>季华园</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">April 2, 1971</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>罗志思</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">October 12, 1966</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">学生请假</h5>
              <h6 class="card-subtitle text-muted">学生事假、病假行为，由老师操作，更改记录。</h6>
            </div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th style="width:25%;">姓名</th>
                <th style="width:25%;">学号</th>
                <th class="d-none d-md-table-cell" style="width:30%">签到时间</th>
                <th style="width:20%;">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>卢仲</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">June 21, 1961</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>张飒名</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">May 15, 1948</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>哑奴与152</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">September 14, 1965</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>季华园</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">April 2, 1971</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>罗志思</td>
                <td>180702240128</td>
                <td class="d-none d-md-table-cell">October 12, 1966</td>
                <td class="table-action">
                  <a><i data-toggle="modal" data-target="#defaultModalPrimary"
                        class="align-middle" data-feather="edit-2"></i></a>
                  <a href="#"><i class="align-middle" data-feather="trash"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="modal fade" id="defaultModalPrimary" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">修改签到情况</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body m-3">
                <p class="mb-0">
                  学生：{{ messeage }}，学号：{{ message }}，因不可控因素，如断网断电、事假等造成无法按时签到，请及时联系老师修改签到情况。</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary">修改为正常签到</button>
                <button type="button" class="btn btn-success">修改为事假</button>
              </div>
            </div>
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
