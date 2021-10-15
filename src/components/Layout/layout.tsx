import React, {useState, useEffect, FC} from 'react'
import NavBar from '../SideBar/navBar'
import Header from '../Header/header'
import service from '../../api/api'
import {userListContext} from '../../App'
import {useContextSelector} from "use-context-selector";


const Layout:FC=({children})=>{

    const [isValidating, setValidating] = useState<boolean>(true)
    const [userList, setUserList]= useContextSelector(userListContext,(e)=> [e.userList, e.setUserList])
    const [switchMenu, setSwitchMenu] = useState<boolean>(false)


    useEffect(()=>{
        const initApp= async ()=>{

            const {success, data} = await new Promise(response =>
                setTimeout(()=>{
                    service.Auth.userAuth()
                        .then((res)=>{
                            response({success:true, data:res.data.data})
                        })
                },500)

            )
            if(success){
                setUserList(data)
                setValidating(false)
            }

        }
        initApp()
    },[])



    // useEffect(() => {
    //     initApp()
    // },[])

    if(isValidating)return <>"Loading..."</>

    return(
        <div className="layout-wrapper">
            {
                userList !== null ? <>
                    <Header switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} userList={userList} />
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
