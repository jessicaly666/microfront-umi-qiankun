import styles from './index.less';
import {history} from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p onClick={() => {
        history.push('/500px')
      }}>去子应用</p>
    </div>
  );
}
