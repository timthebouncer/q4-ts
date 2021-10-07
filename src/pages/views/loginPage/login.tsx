import React, {FC,useState} from 'react'
import service from "../../../api/http";


type IUserLogin={
    username:string;
    password:string;
}

const Login:FC=()=>{

    const [state, setState]= useState<IUserLogin>({username:'',password:''})

    let data={
        username:state.username,
        password:state.password
    }


    const loginFun=async(data)=>{
        await service.Login.userLogin(data)
            .then((res)=>{
                // localStorage.setItem('token', res.data.token)
                // setToken(res.data.token)
                // message.success(res.data.message,'success')
                if(res.data.data){
                    // history.push('/index')
                }
            })
            .catch((err)=>{
                message.error(err.response.data.message,'error')
            })
    }

    return(
        <div>
            帳號<input value={state.username} onChange={(e)=>e.target.value} type="text"/>
            密碼<input value={state.password} onChange={(e)=>e.target.value} type="text"/>
            <button onClick={loginFun}>登入</button>
        </div>
    )
}
export default Login