import React,{FC} from "react";
import {useContextSelector} from 'use-context-selector';
import {userInput} from './form'


interface IProps{
    className:string;
    onSubmit: (userInfo: IUser)=>void;
}
interface IUser {
    username:string;
    password:string;
}

const RenderForm:FC<IProps>=({onSubmit,className,children})=>{
    const [userInfo]= useContextSelector(userInput,e=>[e.userInfo,e.formError,e.setFormError])
    const submitHandler=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        onSubmit(userInfo)
    }

    return(
        <div className={className}>
                <form
                    style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}
                    onSubmit={submitHandler}
                >
                    {children}
                </form>
        </div>
    )
}

export default RenderForm
