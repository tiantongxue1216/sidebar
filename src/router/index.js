import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import { checkServerIdentity } from 'tls';

Vue.use(Router)

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
      title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/ErrorPage/404.vue'], resolve); }
}

// export const page403 = {
//   path: '/403',
//   meta: {
//       title: '403-权限不足'
//   },
//   name: 'error-403',
//   component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
// }

// export const page500 = {
//   path: '/500',
//   meta: {
//       title: '500-服务端错误'
//   },
//   name: 'error-500',
//   component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
// }


export default new Router({
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [{
        path: '',
        redirect: { name: 'Project'}
      },
      {
        name: 'Project',
        path: '/Project',
        meta: {

        },
        component(resolve) {
          import('@/views/Project/project-index').then(resolve)
        }
      },
      {
        name: 'Task',
        path: '/Task',
        meta: {},
        component(resolve) {
          import('@/views/Task/task-index').then(resolve)
        }
      },
      {
        name: 'DataSet',
        path: '/DataSet',
        meta: {},
        component(resolve) {
          import('@/views/DataSet/dataset-index').then(resolve)
        }
      },
      {
        name: 'Model',
        path: '/Model',
        meta: {},
        component(resolve) {
          import('@/views/Model/model-index').then(resolve)
        }
      }
    ]
  },
]
})
