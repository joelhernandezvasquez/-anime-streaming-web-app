import Link from "next/link";
import style from './sidebar.module.css';

interface Props{
    item:string,
    path:string,
    icon:JSX.Element
}

const SidebarMenuItem = ({item,icon,path}:Props) => {
  return (
    <li className={style.sidebar_menu_item} key={item}> 
    <span>{icon}</span>
    <Link href={path}>{item}</Link>
   </li>
  )
}

export default SidebarMenuItem