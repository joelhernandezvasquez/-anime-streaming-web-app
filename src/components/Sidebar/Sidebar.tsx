
import SideBarMenu from './SideBarMenu';
import style from './sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={style.sidebar_container}>
      <h2 className={style.sidebar_heading}>streame</h2>
      <SideBarMenu/>
    </nav>
  )
}

export default Sidebar