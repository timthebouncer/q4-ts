import React, {FC} from 'react'
import './header.css'
import {collapseIcon, bellIcon, logoutIcon} from "@/Icon/svg";

const Header:FC=props=>{
    const {switchMenu,setSwitchMenu, userData} = props

    return(
        <div>
            <div className='header-wrapper'>
                <div className="left-section">
                    <div>LOGO</div>
                    <div onClick={()=>setSwitchMenu(!switchMenu)} className="collapse-icon cursor-pointer">
                        {collapseIcon}
                    </div>
                </div>
                <div className="right-section">
                    <div className="bell-icon">
                        {bellIcon}
                    </div>
                    <div className="avatar"><img src={userData.imgLink?userData.imgLink:''} /></div>
                    <div className="user-info">{userData.username}</div>
                    <div className="logout-btn">
                        <button>
                            {logoutIcon}
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-b-1 border-black' />
        </div>

    )

}

export default Header
