import { MenuItems } from "@/interface/Menu/menuItem";
import { IoHome,IoTrendingUp,IoListOutline,IoPersonOutline,IoVideocamOutline,IoSettingsOutline,IoLogOutOutline} from "react-icons/io5";

export const menuItems:MenuItems [] = 
[
  {
   item:'Home',
   path:'/',
   icon:<IoHome size = {20}/>
  },
  {
    item:'Trending',
    path:'/trending',
    icon:<IoTrendingUp size = {20}/>
   },
   {
    item:'Anime List',
    path:'/anime-list',
    icon:<IoListOutline size = {20}/>
   }, 
   {
    item:'Following',
    path:'',
    icon:<IoPersonOutline size = {20}/>
   }, 
   {
    item:'Videos',
    path:'',
    icon:<IoVideocamOutline size = {20}/>
   }, 
   {
    item:'Settings',
    path:'',
    icon:<IoSettingsOutline size = {20}/>
   },
   {
    item:'Log Out',
    path:'',
    icon:<IoLogOutOutline size = {20}/>
   },

]