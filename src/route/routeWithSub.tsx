import {Link} from "react-router-dom";
import React, {useState,FC} from "react";
import {userIcon, chevronDown, chevronUp} from '../Icon/svg'
import Tooltip from "@/components/tooltip/tooltip";

type Props={
  item:any
  index:number;
  switchMenu:boolean;
}

type Iitems={
  path:string;
  name:string;
}

const RouteWithSubRoutes:FC<Props>=({item,index,switchMenu})=> {

  const [direction, setDirection] = useState(true)

  return (
    <>
        <ul className="sidebar-items" key={index}>
          <li className="flex mb-2">
            {
              !switchMenu? <><span className={'mr-4'}>{userIcon}</span> <span>{item.name}</span>
                  {direction ? <i onClick={()=>setDirection(false)} className={'mt-1.5'}>{chevronDown}</i> :
                          <i onClick={()=>setDirection(true)} className={'mt-1.5'}>{chevronUp}</i>
                  }</>:<>
                <Tooltip text={item.name}>
                        <span className={"m-0 h-8"}>
                        {userIcon}
                      </span>
                </Tooltip>
              </>
            }
          </li>
            {item.routes.map((items:Iitems, index:number) => {
              return(
                <>
                  {
                !switchMenu && direction ? <Link key={index} to={items.path} className={'flex justify-center mb-3'}>
                    {items.name}
                  </Link>:''
                }
                </>
              )
            })}
        </ul>
    </>
  );
}

export default RouteWithSubRoutes;
