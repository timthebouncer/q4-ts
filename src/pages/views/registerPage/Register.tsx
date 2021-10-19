import React, {FC} from "react";
import Form from "@/components/form/form";
import TextInput from '@/components/form/input'

const Register:FC=()=>{
    return(
        <div className="register-wrapper">
            <h1 className="text-center">註冊</h1>
            <div className="sign-up">
                {/*<Form className="form-wrapper" onSubmit={(data)=>registerBtn(data,history)}>*/}
                {/*    <TextInput className={'ml-3 w-80'} name="username" label="帳號" placeholder="必須是信箱" validators={[requiredValidator,usernameValidator]} />*/}
                {/*    <TextInput className={'ml-3 w-80'} name="nickname" label="使用者名稱" placeholder="可選,對其他用戶顯示的名稱" />*/}
                {/*    <TextInput className={'ml-3 w-80'} name="password" type="password" label="密碼" placeholder="4-8字元;首尾必須是英文;中間必須是數字"*/}
                {/*               validators={[requiredValidator,passwordValidator]} />*/}
                {/*    <TextInput className={'ml-3 w-80'} name="passwordConfirmation" type="password" label="確認密碼" placeholder="4-8字元;首尾必須是英文;中間必須是數字"*/}
                {/*               validators={[requiredValidator,passwordMatchedValidator]} />*/}
                {/*    <Link className="register-btn" to='/'>返回登入</Link>*/}
                {/*    <button className="submit-btn" type="submit">註冊</button>*/}
                {/*</Form>*/}
            </div>
        </div>
    )
}

export default Register