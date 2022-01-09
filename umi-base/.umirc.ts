import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/', 
          component: '@/pages/index'
        },
        {
          path: '/500px', 
          microApp: '500px',
          microAppProps: {
            autoSetLoading: true,
            className: 'myApp',
            wrapperClassName: 'myWrapper'
          }
        },
      ]
    }
  ],
  qiankun: {
    master: {
      apps: [{
        name: '500px',
        entry: 'http://localhost:8001',
        props: {
          username: 'jessica'
        }
      }],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    }
  }
});
