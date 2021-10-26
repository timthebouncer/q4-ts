import React, {ChangeEvent, useEffect,useRef,useState, FC} from "react";
import {userInput} from './form'
import {useContextSelector} from "use-context-selector";


interface IProps {
    name?:string;
    label?:string;
    placeholder?:string;
    type?:string;
    rules?:[{ required: boolean,min?:number }]
}


const TextInput:FC<IProps>=({name,label,placeholder,type,rules})=>{
    const [message, setMessage] = useState(null);
    const inputRef = useRef({});
    const [userInfo,setUserInfo,inputRefs]= useContextSelector(userInput,e=>[e.userInfo,e.setUserInfo,e.inputRefs])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        inputRef.current = {
            setMessage,
            rules,
            userInfo,
            name
        };
    });
    useEffect(() => {
        inputRefs.current.push(inputRef);
    }, []);

    return(
        <div className={'mb-3'}>
            {rules? <span>*</span>:<></>}
            <label>{label}</label>
            <input name={name} type={type} placeholder={placeholder} className={'ml-3 w-80'} onChange={handleChange} />
            {message? <div className={'text-center'}>{message}</div>:<></>}

        </div>
)
}

export default TextInput
