import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () => import('../page/login/login')
const baseView = () => import('../page/layout/base-view')
const index = () => import('../page/index')
const onlineSign = () => import('../page/index/online-sign')
const outlineSign = () => import('../page/index/outline-sign')
const signOutput = () => import('../page/index/sign-output')
const onlineBehavior = () => import('../page/index/online-behavior')
const outlineBehaviorIng = () => import('../page/index/outline-behavior-ing')
const outlineBehaviorAfter = () => import('../page/index/outline-behavior-after')
const behaviorOutput = () => import('../page/index/behavior-output')
const rightContent = () => import('../page/layout/right-content')
export const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    hidden: false
  },
  {
    path: '/main',
    component: baseView,
    hidden: false,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '首页',
        icon: 'el-icon-s-home',
        component: index,
        hidden: false
      },
      {
        path: '/sign',
        name: '课堂点名',
        icon: 'el-icon-s-custom',
        hidden: false,
        component: rightContent,
        children: [
          {
            path: 'online',
            name: '线上课堂点名',
            icon: 'el-icon-s-promotion',
            hidden: false,
            component: onlineSign
          },
          {
            path: 'outline',
            name: '线下课堂点名',
            icon: 'el-icon-message-solid',
            hidden: false,
            component: outlineSign
          }
        ]
      },
      {
        path: '/behavior',
        name: '行为检测',
        hidden: false,
        icon: 'el-icon-s-check',
        component: rightContent,
        children: [
          {
            path: 'online',
            name: '线上行为检测',
            icon: 'el-icon-video-camera-solid',
            hidden: false,
            component: onlineBehavior
          },
          {
            path: 'outline',
            name: '线下行为检测',
            icon: 'el-icon-menu',
            hidden: false,
            component: rightContent,
            children: [
              {
                path: 'ing',
                name: '课上（检测学习状态）',
                icon: 'el-icon-s-flag',
                hidden: false,
                component: outlineBehaviorIng
              },
              {
                path: 'after',
                name: '课间（检测危险行为）',
                icon: 'el-icon-s-finance',
                hidden: false,
                component: outlineBehaviorAfter
              }
            ]
          }
        ]
      },
      {
        path: '/output',
        name: '分析报告',
        icon: 'el-icon-s-order',
        hidden: false,
        component: rightContent,
        children: [
          {
            path: 'sign',
            name: '签到分析报告',
            icon: 'el-icon-s-data',
            hidden: false,
            component: signOutput
          },
          {
            path: 'behavior',
            name: '行为检测分析报告',
            icon: 'el-icon-share',
            hidden: false,
            component: behaviorOutput
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirect: '/login'
  }
]
const router = new Router({
  routes // (缩写) 相当于 routes: routes
})

export default router
