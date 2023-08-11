import Link from "next/link";

interface Props{
    item:string,
    path:string,
    icon:JSX.Element
}

const SidebarMenuItem = ({item,icon,path}:Props) => {
  return (
    <li key={item}> 
    <span>{icon}</span>
    <Link href={path}>{item}</Link>
   </li>
  )
}

export default SidebarMenuItem