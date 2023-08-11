
import SidebarMenuItem from "./SidebarMenuItem";
import { menuItems } from "@/constants";
import style from './sidebar.module.css';

const SideBarMenu = () => {
  return (
    <ul className={style.sidebar_menu}>
       {menuItems.map((item)=>{
        return <SidebarMenuItem key={item.item} {...item}/>
       })}
      </ul>
  )
}

export default SideBarMenu