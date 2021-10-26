import React, {FC, useEffect, useState} from "react";
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
    const [isValid,setValid] = useState(false)
    const [userInfo,inputRefs]= useContextSelector(userInput,e=>[e.userInfo,e.inputRefs])
    const submitHandler=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        inputRefs.current.forEach((e) => {
            const {
                current: {setMessage, rules,userInfo,name }
            } = e;
            const message = commonValidator(rules, userInfo[name]);
            setMessage(message);
        });
        if(isValid){
            onSubmit(userInfo)
        }
    }

    const commonValidator = (rules: string | any[], val: any) => {
        if (!rules || !Array.isArray(rules)) return null;
        let message = null;
        for (let i = 0; i < rules.length; i++) {
            const { required,min } = rules[i];
            if (required != null && !val) {
                message = "必填";
            } else if (min != null && val?.length < min) {
                message = `長度需大於等於${min}`;
            }
        }
        if(message===null){
            setValid(true)
        }

        return message;
    };

    useEffect(() => {
        const sss=()=>{
            return () => (inputRefs.current = []);
        }
        sss()
    }, []);

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
