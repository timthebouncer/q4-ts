import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react'
import service from "../../../api/api";
import {AxiosResponse} from "axios";
import IUserLogin, {IUser} from '../../../types/storeTypes'


const initialState:IUserLogin = {
    username: '',
    password: '',
};

type IUserData={
    token:string | null
}


const Login:FC=()=>{

    const [state, setState]= useState(initialState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const loginFun=async()=>{

        let data:IUserLogin={
            username:state.username,
            password:state.password
        }

        await service.Login.userLogin(data)
            .then((res:AxiosResponse<IUserData>)=>{
                console.log(res)
                if (res.data.token != null) {
                    localStorage.setItem('token', res.data.token as IUserData)
                }
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
            帳號<input name='username' onChange={handleChange} type="text"/>
            密碼<input name='password' onChange={handleChange} type="text"/>
            <button onClick={loginFun}>登入</button>
        </div>
    )
}
export default Login
