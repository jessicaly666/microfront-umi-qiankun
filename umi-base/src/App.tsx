import React from 'react';
import {request} from 'umi';

export function onRouteChange ({matchedRoutes}) {
  console.log('matchedRoutes', matchedRoutes)
  document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
}

// export function rootContainer(container) {
//   return React.createElement(<div>
//     测试
//   </div>, null, container)
// }

// export const qiankun = request('/api/apps').then((apps) => ({
//   apps,
//   routes: [
//     {
//       path: '/500px',
//       microApp: '500px',
//       microAppProps: {
//         autoSetLoading: true,
//         className: 'myContainer',
//         wrapperClassName: 'myWrapper',
//       }
//     }
//   ],
//   lifeCycles: {
//     afterMount: (props) => {
//       console.log('afterMount', props)
//     }
//   }
// }))


export function useQiankunStateForSlave() {
  return {
    loginUser: {
      username: 'liyan'
    }
  };
}