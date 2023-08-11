
import SideBarMenu from './SideBarMenu';
import style from './sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={style.sidebar_container}>
      <p>streame</p>
      <SideBarMenu/>
    </nav>
  )
}

export default Sidebar