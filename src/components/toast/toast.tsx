import React, {FC} from 'react'
import ReactDOM from 'react-dom'
import './message.css'
import {infoIcon, errorIcon} from "../../Icon/svg";


interface IProps {
    msg:string;
    type:string;
}

const Toast:FC<IProps>=({msg,type})=>{
    return(
        <div>
        {
            type === 'success' ?
            <div className="message bg-yellow-400">
                {infoIcon}
                <p>{msg}</p>
            </div>:(
            <div className="message bg-red-400">
                {errorIcon}
                <p>{msg}</p>
            </div>)
        }
        </div>
    )
}

const notification=(msg:string,type:string)=>{
    let div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(<Toast msg={msg} type={type} />, div)

    setTimeout(()=>{
        document.body.removeChild(div)
    },2000)
}

export default {
    success:(msg:string,type:string )=>notification(msg,type),
    error:(msg:string,type:string)=>notification(msg,type)
}


