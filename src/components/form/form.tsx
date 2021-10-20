import React, {Dispatch, FC, MouseEvent,FormEventHandler, SetStateAction, useState} from "react";
import Input from "./input";
import {createContext, useContextSelector} from 'use-context-selector';
import {IRegister} from "@/types/storeTypes";
import RenderForm from "@components/form/renderForm";


interface IProps{
    className:string;
    onSubmit: (userInfo: IUser)=>void;
}

interface IUser {
    username:string;
    password:string;
}
let initialState:IUser={
    username:'',
    password:''
}



  export const userInput = createContext<{userInfo:IUser, setUserInfo:Dispatch<SetStateAction<IUser>>}>(null as any)


const Form:FC<IProps>=({className,children,onSubmit})=>{
    const UserInputProvider:FC=({children})=>{
        const[userInfo, setUserInfo] = useState<IUser | IRegister>(initialState)

        return(
        <userInput.Provider value={{userInfo, setUserInfo}}>
            {children}
        </userInput.Provider>
        )

    }

    return(
        <UserInputProvider>
        <RenderForm onSubmit={onSubmit} className={className} children={children}/>
        </UserInputProvider>
        )
}

export default Form

