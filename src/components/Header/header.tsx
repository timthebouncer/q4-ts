import React, {Dispatch, FC, SetStateAction} from 'react'
import './header.css'
import {collapseIcon, bellIcon, logoutIcon} from "../../Icon/svg";
import {IUserList} from '../../types/storeTypes'

type Props={
    switchMenu:boolean;
    setSwitchMenu:Dispatch<SetStateAction<boolean>>;
    userList: IUserList | null
}



const Header:FC<Props>=(props:Props)=>{

    const {switchMenu,setSwitchMenu, userList} = props


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
                    {
                        userList !== null ? <>
                            <div className="avatar"><img src={userList.imgLink?userList.imgLink:''} /></div>
                            <div className="user-info">{userList.username}</div>
                            <div className="logout-btn">
                                <button>
                                    {logoutIcon}
                                </button>
                            </div></>: ''
                    }

                </div>
            </div>
            <hr className='border-b-1 border-black' />
        </div>

    )

}

export default Header
