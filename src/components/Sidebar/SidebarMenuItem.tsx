'use client';

import Link from "next/link";
import style from './sidebar.module.css';
import { usePathname } from "next/navigation";

interface Props{
    item:string,
    path:string,
    icon:JSX.Element
}

const SidebarMenuItem = ({item,icon,path}:Props) => {
  const pathName = usePathname();
  
  return (
    <li className={`${style.sidebar_menu_item} ${path === pathName && style.active_link}`} key={item}> 
    <span className={style.sidebar_icon}>{icon}</span>
    <Link href={path}>{item}</Link>
   </li>
  )
}

export default SidebarMenuItem