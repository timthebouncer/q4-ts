import React, {Dispatch, FC, SetStateAction, useRef, useState} from "react";
import {createContext} from 'use-context-selector';
import {IUser,IRegister} from "@/types/storeTypes";
import RenderForm from "@components/form/renderForm";


interface IProps{
    className:string;
    onSubmit: (userInfo: IUser)=>void;
}


let initialState:IUser={
    username:'',
    password:''
}


  export const userInput = createContext<{inputRefs:React.MutableRefObject<Array<any>>,userInfo:IUser, setUserInfo:Dispatch<SetStateAction<IUser>>}>(null as any)


const Form:FC<IProps>=({className,children,onSubmit})=>{


    const UserInputProvider:FC=({children})=>{
        const[userInfo, setUserInfo] = useState<IUser | IRegister>(initialState)
        const inputRefs = useRef<Array<any>>([]);

        return(
        <userInput.Provider value={{userInfo, setUserInfo,inputRefs}}>
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

