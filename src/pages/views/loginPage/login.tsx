import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react'
import service from "../../../api/api";
import {authContext} from '../../../App'
import { useHistory } from "react-router-dom";


import {useContextSelector} from "use-context-selector";


const initialState = {
    username: '',
    password: '',
};
const Login:FC=()=>{
    const history = useHistory()
    const [state, setState]= useState(initialState)
    const [setUserData]= useContextSelector(authContext,e=>[e.setUserData])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const loginFun=async()=>{
        await service.Login.userLogin(state)
            .then((res)=>{
                console.log(res)

                if (res.data.token != null) {
                    localStorage.setItem('token', res.data.token)
                    setUserData(res.data)
                }
                // message.success(res.data.message,'success')
                // if(res.data.data){
                    history.push('/index')
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
