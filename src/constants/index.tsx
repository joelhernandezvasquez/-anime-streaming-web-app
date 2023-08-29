import { MenuItems } from "@/interface/Menu/menuItem";
import { IoHome,IoTrendingUp,IoListOutline,IoPersonOutline,IoVideocamOutline,IoSettingsOutline,IoLogOutOutline, IoSearchOutline} from "react-icons/io5";

export const menuItems:MenuItems [] = 
[
  {
   item:'Home',
   path:'/dashboard/main',
   icon:<IoHome size = {25}/>
  },
  {
    item:'Trending',
    path:'/dashboard/trending',
    icon:<IoTrendingUp size = {25}/>
   },
   {
    item:'Anime List',
    path:'/dashboard/animeList',
    icon:<IoListOutline size = {25}/>
   }, 
   {
    item:'Search',
    path:'/dashboard/search',
    icon:<IoSearchOutline  size = {25}/>
   },

   {
    item:'Following',
    path:'',
    icon:<IoPersonOutline size = {25}/>
   }, 
   {
    item:'Videos',
    path:'',
    icon:<IoVideocamOutline size = {25}/>
   }, 
   {
    item:'Settings',
    path:'',
    icon:<IoSettingsOutline size = {25}/>
   },
   {
    item:'Log Out',
    path:'',
    icon:<IoLogOutOutline size = {25}/>
   },

]