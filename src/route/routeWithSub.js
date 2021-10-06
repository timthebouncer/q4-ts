import {Link} from "react-router-dom";
import React, {useState} from "react";
import {userIcon, chevronDown, chevronUp} from '@/Icon/svg'
import ToolTip from "@/component/tooltip/tooltip";

function RouteWithSubRoutes({item,index,switchMenu}) {

  const [direction, setDirection] = useState(true)

  return (
    <>
        <ul className="sidebar-items" key={index}>
          <li className="flex mb-2">
            {
              switchMenu===false? <><span className={'mr-4'}>{userIcon}</span> <span>{item.name}</span>
                  {direction ? <i onClick={()=>setDirection(false)} className={'mt-1.5'}>{chevronDown}</i> :
                          <i onClick={()=>setDirection(true)} className={'mt-1.5'}>{chevronUp}</i>
                  }</>:<>
                <ToolTip text={item.name}>
                        <span className={"m-0 h-8"}>
                        {userIcon}
                      </span>
                </ToolTip>
              </>
            }
          </li>
            {item.routes.map((item, i) => {
              return(
                <>
                  {
                !switchMenu && direction ? <Link key={i} to={item.path} className={'flex justify-center mb-3'}>
                    {item.name}
                  </Link>:''
                }
                </>
              )
            })}
        </ul>


      {/*<SidebarLink to={item.path}*/}
      {/*             onClick={item.subNav && showSubnav}>*/}
      {/*  <div>*/}
      {/*    {item.icon}*/}
      {/*    <SidebarLabel>{item.title}</SidebarLabel>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    {item.subNav && subnav*/}
      {/*      ? item.iconOpened*/}
      {/*      : item.subNav*/}
      {/*        ? item.iconClosed*/}
      {/*        : null}*/}
      {/*  </div>*/}
      {/*</SidebarLink>*/}
      {/*{subnav &&*/}
      {/*item.subNav.map((item, index) => {*/}
      {/*  return (*/}
      {/*    <DropdownLink to={item.path} key={index}>*/}
      {/*      {item.icon}*/}
      {/*      <SidebarLabel>{item.title}</SidebarLabel>*/}
      {/*    </DropdownLink>*/}
      {/*  );*/}
      {/*})}*/}
    </>
  );
}

export default RouteWithSubRoutes
