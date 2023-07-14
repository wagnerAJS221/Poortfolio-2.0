import { Outlet } from 'react-router-dom'
import '../Sidebar'
import './index.scss'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html">&lt;body&gt; </span>
        </span>
      </div>
    </div>
  )
}

export default Layout
