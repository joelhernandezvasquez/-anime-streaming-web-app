
import SidebarMenuItem from "./SidebarMenuItem";
import { menuItems } from "@/constants";

const SideBarMenu = () => {
  return (
    <ul>
       {menuItems.map((item)=>{
        return <SidebarMenuItem key={item.item} {...item}/>
       })}
      </ul>
  )
}

export default SideBarMenu