import React, {FC} from "react";
import Form from "@/components/form/form";
import TextInput from '@/components/form/input'
import {Link} from "react-router-dom";
import './register.css'
import service from '@/api/api'
import message from '@/components/toast/toast'
import { useHistory } from "react-router-dom";
import {IRegister} from '@/types/storeTypes'


const registerBtn=async (data:IRegister,history:any)=>{
    await service.Register.userRegister(data)
        .then(res=>{
            message.success(res.data.message,'success')
            history.push('/')
        })
        .catch(err=>{
            message.error(err.response.data.message,'error')
        })
}


const Register:FC=()=>{
    let history = useHistory()


    return(
        <div className="register-wrapper">
            <h1 className="text-center">註冊</h1>
            <div className="sign-up">
                <Form className="form-wrapper" onSubmit={(data)=>registerBtn(data,history)}>
                    <TextInput name="username" label="帳號" placeholder="必須是信箱" rules={[{ required: true }]} />
                    <TextInput name="nickname" label="使用者名稱" placeholder="可選,對其他用戶顯示的名稱" />
                    <TextInput name="password" type="password" label="密碼" placeholder="4-8字元;首尾必須是英文;中間必須是數字" rules={[{ required: true,min:4 }]}
                                />
                    <TextInput name="passwordConfirmation" type="password" label="確認密碼" placeholder="4-8字元;首尾必須是英文;中間必須是數字"
                               />
                    <Link className="register-btn" to='/'>返回登入</Link>
                    <button className="submit-btn" type="submit">註冊</button>
                </Form>
            </div>
        </div>
    )
}

export default Register
