## 主应用配置

### 安装
创建空目录 umi-base

```js
yarn create @umijs/umi-app
yarn 
yarn add @umijs/plugin-qiankun -D
yarn start
```

### .umirc.ts
注册qiankun

```js
  // 装载子应用
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
  // 注册子应用
  qiankun: {
    master: {
      apps: [{
        name: '500px',
        entry: 'http://localhost:8001',
        // 子应用传参（方式一）
        props: {
          username: 'jessica'
        }
      }],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    }
  }
```

### app.ts
src/app.ts
```js
// 子应用传参（方式二）
export function useQiankunStateForSlave() {
  return {
    loginUser: {
      username: 'liyan'
    }
  };
}
```

## 子应用配置
### 安装
创建空目录 umi-microapp

```js
yarn create @umijs/umi-app
yarn 
yarn add @umijs/plugin-qiankun -D
yarn start
```

### .umirc.ts

```js
qiankun: {
  slave: {}
}
```
同时，注意要在package.json中配置子应用的name，确保名称与主应用注册的微应用name保持一致

```js
name: '500px'
```

### app.ts
+ 配置生命周期（可选）
+ 通过props获取主应用传参
```js
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};
```

### 获取参数方式
通过高阶组件connectMaster来获取主应用透传的 props
```js
import styles from './index.less';
import { connectMaster } from 'umi';

function IndexPage(props) {
  // props.username 是方式一的传参
  // props.loginUser 是方式二的传参，useQiankunStateForSlave的返回值
  return (
    <div>
      <h1 className={styles.title}>500px首页</h1>
      <p>{props.username}</p>
      <p>{props.loginUser.username}</p>
    </div>
  );
}

export default connectMaster(IndexPage);

```



