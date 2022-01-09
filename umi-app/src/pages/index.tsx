import styles from './index.less';
import { connectMaster } from 'umi';

function IndexPage(props) {
  console.log('500px子应用参数', props)
  return (
    <div>
      <h1 className={styles.title}>500px首页</h1>
      <p>{props.username}</p>
      <p>{props.loginUser.username}</p>
    </div>
  );
}

export default connectMaster(IndexPage);
