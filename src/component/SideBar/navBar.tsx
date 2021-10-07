import React from 'react'
import {SidebarData} from './sideBarData'
import {Link, Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import './sidebar.css'
import RouteWithSubRoutes from '@/route/routeWithSub'



const NavBar=({switchMenu, userData})=>{


    return(
        <div className={switchMenu===false? "w-48 h-screen p-4":"w-11 h-screen p-4"} >

            {SidebarData.map((item, index) => {
                return <RouteWithSubRoutes item={item} key={index} switchMenu={switchMenu} />;
            })}
        </div>
    )
}
export default NavBar
