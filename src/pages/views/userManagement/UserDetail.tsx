import React, {FC} from "react";


const UserDetail:FC<any>=(props)=>{
    const {history} = props.props
    return (
    <div>
        <h1>會員詳情</h1>
        <button onClick={()=>history.goBack()}>返回</button>
    </div>)
}

export default UserDetail
