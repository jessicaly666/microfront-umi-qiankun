import {Link} from 'umi';

export default function Layout(props) {
  return (
    <div className="page">
      <div className="header">头部</div>
      <div>
        <Link to="/">首页</Link>
        <Link to="/500px">500px</Link>
      </div>
      <div className="content">
        {props.children}
      </div>
      <div className="footer">脚部</div>
    </div>
  );
}
