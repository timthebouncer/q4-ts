import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import service from "../../../api/api";
import {AxiosResponse} from "axios";
import IUser from '../../../types/storeTypes'

type IUserLogin={
    username:string;
    password:string;
    // setState:Dispatch<SetStateAction<string>>;
}




const Login:FC=()=>{

    const [state, setState]= useState<IUserLogin | {username:'',password:''}>({username:'',password:''})


    const loginFun=async()=>{

        let data:IUserLogin={
            username:state.username,
            password:state.password
        }

        await service.Login.userLogin(data)
            .then((res:AxiosResponse<IUser>)=>{
                console.log(res)
                // localStorage.setItem('token', res.data.token)
                // setToken(res.data.token)
                // message.success(res.data.message,'success')
                // if(res.data.data){
                    // history.push('/index')
                // }
            })
            .catch((err)=>{
                // message.error(err.response.data.message,'error')
            })
    }

    return(
        <div>
            帳號<input value={state.username} onChange={(e)=>setState(e.target.value)} type="text"/>
            密碼<input value={state.password} onChange={(e)=>setState(e.target.value)} type="text"/>
            <button onClick={loginFun}>登入</button>
        </div>
    )
}
export default Login
