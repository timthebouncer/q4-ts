import ReactDOM from 'react-dom'
import {FC} from "react";


const Portal:FC=({children})=>{
  return ReactDOM.createPortal(children, document.body)
}

export default Portal
