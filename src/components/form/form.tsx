import React, {Dispatch, FC, SetStateAction, useState} from "react";
import Input from "./input";
import { createContext } from 'use-context-selector';
import {IUserInfo} from "@/types/storeTypes";


interface IProps{
    className:string;
}

interface IUser {
    username:string;
    password:string;
}
let initialState:IUser={
    username:'',
    password:''
}

interface IInput {
    name:string;
    label:string;
    placeholder:string;
    type:string;
}


  export const userInput = createContext<{userInfo:IUser, setUserInfo:Dispatch<SetStateAction<IUser>>}>(null as any)


const Form:FC<IProps>=({className,children})=>{

    const UserInputProvider:FC=({children})=>{
        const[userInfo, setUserInfo] = useState<IUser>(initialState)

        return(
        <userInput.Provider value={{userInfo, setUserInfo}}>
            {children}
        </userInput.Provider>
        )

    }


    return(
            <div className={className}>
                <UserInputProvider>
                    {children}
                </UserInputProvider>
            </div>
        )
}

export default Form
