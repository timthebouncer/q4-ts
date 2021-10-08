import React, {useState, useEffect, FC, Dispatch, SetStateAction} from 'react'
import NavBar from '../SideBar/navBar'
import Header from '../../component/Header/header'
import service from '../../api/api'
import {authContext} from '../../App'
import {useContextSelector} from "use-context-selector";




const Layout:FC=({children})=>{

    const [isValidating, setValidating] = useState<boolean>(true)
    const [userData, setUserData]= useContextSelector(authContext,(e)=> [e.userData, e.setUserData])
    const [switchMenu, setSwitchMenu] = useState<boolean>(false)

    // let token =localStorage.getItem('token')
    // let config={
    //     headers: {"Authorization" : `Bearer ${token}`}
    // }
    //
    // const initApp= async ()=>{
    //
    //     const {success, data} = await new Promise(response =>
    //         setTimeout(()=>{
    //             service.Auth.userAuth(config)
    //                 .then((res:[])=>{
    //                     response({success:true, data:res.data.data})
    //                 })
    //         },500)
    //
    //     )
    //     if(success){
    //         setUserData(data)
    //         setValidating(false)
    //     }
    //
    // }
    //
    // useEffect(initApp,[])
    //
    // if(isValidating)return "Loading..."

    return(
        <div className="layout-wrapper">
            {
                userData !== null ? <>
                    <Header switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} userData={userData} />
                    <div className="flex">
                        <div className="border-r-2 border-black">
                            <NavBar switchMenu={switchMenu} />
                        </div>
                        <div className="component-wrapper w-full">
                            {children}
                        </div>
                    </div>
                </>:''
            }
        </div>
    )
}
export default Layout
