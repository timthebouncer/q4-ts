import React, {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import {userInput} from './form'
import {useContextSelector} from "use-context-selector";




interface IProps {
    name?:string;
    label?:string;
    placeholder?:string;
    type?:string;
    // validator:Dispatch<SetStateAction<string[]>>
}


const TextInput:FC<IProps>=({name,label,placeholder,type})=>{
    const [userInfo,setUserInfo]= useContextSelector(userInput,e=>[e.userInfo,e.setUserInfo])
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };


    return(
        <div className={'mb-3'}>
            <label>{label}</label>
            <input name={name} type={type} placeholder={placeholder} className={'ml-3 w-80'} onChange={handleChange} />
            <div className={'text-center'}>55</div>
        </div>
)
}

export default TextInput
