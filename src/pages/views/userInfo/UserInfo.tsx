import React, {FC} from "react";


import service from '../../../api/api'
// import message from "@/component/toast/toast";
import {userListContext} from "../../../App";
import {useContextSelector} from "use-context-selector";
import {Switch} from 'react-router-dom'
import { IUserList } from "../../../types/storeTypes";


async function handleUpload(e: React.ChangeEvent<HTMLInputElement>, userData: IUserList | null, setUserData: React.Dispatch<React.SetStateAction<IUserList | null>>) {
    // @ts-ignore
    uploadFile(e.target.files[0], userData, setUserData);
    // showPreviewImage(e.target.files[0])

}

// function showPreviewImage(fileObj,avatar) {
    // avatar.src = URL.createObjectURL(fileObj);
// }

function uploadFile(fileObj: string | Blob, userData: IUserList | null, setUserData: { (value: React.SetStateAction<IUserList | null>): void; (arg0: any): void; }) {

    const formData = new FormData()
    formData.append('image',fileObj)
    service.Upload.userImg(formData)
        .then((res)=>{
            // message.success(res.data.message,'success')
            setUserData({...userData,link:res.data.data})
        })
}

const Profile=()=>{
    const [userList, setUserList]= useContextSelector(userListContext,e=>[e.userList, e.setUserList])

    return(
        <div>
            帳戶設定
            <div>
                {
                    <img src={userList && userList.link ?userList.link:'https://via.placeholder.com/300x300/efefef?text=Avatar'}
                         alt="image-placeholder"
                         className="img-thumbnail w-40" data-target="image-preview" />
                }
            </div>
            <div>
                {
                    userList?<span>{userList.name}({userList.username})</span>:<span>Loading...</span>
                }
            </div>
            <div>
                <label>
                    <input type="file" id="file-uploader" className={'hidden'} accept="image/*"
                           onChange={(e)=>handleUpload(e,userList,setUserList)}
                    />
                    <span className={'bg-blue-500 p-3.5 rounded text-white absolute cursor-pointer'}>上傳圖片</span>
                </label>

            </div>
        </div>
    )
}


const UserInfo:FC=()=>{
    return(
        <Switch>
            <Profile />
        </Switch>
    )
}

export default UserInfo








