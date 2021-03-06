import React, {ChangeEvent, FC, useState} from 'react'
import service from "../../../api/api";
import {authContext} from '@/App'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import './index.css'
import message from '../../../components/toast/toast'
import {useContextSelector} from "use-context-selector";
import Form from "@/components/form/form";
import TextInput from '@/components/form/input'
import {IUser} from '@/types/storeTypes'

const initialState = {
    username: '',
    password: '',
};


const Login:FC=()=>{
    const history = useHistory()
    const [state, setState]= useState(initialState)
    const [setUserData]= useContextSelector(authContext,e=>[e.setUserData])



    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setState({ ...state, [event.target.name]: event.target.value });
    // };

    const loginFun=async(data:IUser)=>{
        await service.Login.userLogin(data)
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
                    <Form className="formWrapper" onSubmit={data=>loginFun(data)}>
                        <TextInput  name="username"
                                    placeholder="請輸入帳號"
                                    label="帳號"
                                    type={'text'}
                        />
                        <TextInput  name="password"
                                    placeholder="請輸入帳號"
                                    label="密碼"
                                    type='password'
                        />

                    <Link className="register-btn" to='/register'>註冊</Link>
                    <button type="submit" className="submit-btn">登入</button>
                    </Form>
            </div>
        </div>
    )
}
export default Login
