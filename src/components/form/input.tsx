import React, {ChangeEvent, FC} from "react";
import {userInput} from './form'
import {useContextSelector} from "use-context-selector";




interface IProps {
    name?:string;
    label?:string;
    placeholder?:string;
    type?:string;
}


const TextInput:FC<IProps>=({name,label,placeholder,type})=>{
    const [userInfo,setUserInfo]= useContextSelector(userInput,e=>[e.userInfo,e.setUserInfo])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };


    return(
        <div>
            <label>{label}</label>
            <input name={name} type={type} placeholder={placeholder} className={'ml-3 w-80'} onChange={handleChange} />
        </div>
)
}

export default TextInput
