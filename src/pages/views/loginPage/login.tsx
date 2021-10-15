import React, {ChangeEvent, FC, useState} from 'react'
import service from "../../../api/api";
import {authContext} from '../../../App'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import './index.css'
import message from '../../../components/toast/toast'

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
                message.success(res.data.message,'success')
                if(res.data.token){
                    history.push('/index')
                }
            })
            .catch((err)=>{
                message.error(err.response.data.message,'error')
            })
    }

    return(
        <div className="login-wrapper">
            <h1 className="text-center">登入</h1>
            <div className="sign-in">
                <div  className="formWrapper">
                    帳號<input name='username' onChange={handleChange} type="text"/>
                    密碼<input name='password' onChange={handleChange} type="text"/>
                    <Link className="register-btn" to='/register'>註冊</Link>
                    <button className="submit-btn" onClick={loginFun}>登入</button>
                </div>
            </div>
        </div>
    )
}
export default Login
