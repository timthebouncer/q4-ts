import React, {useEffect,useState,FC} from "react";
// import service from "@/api/api";
import {Link} from 'react-router-dom'
import {UserWaterFall} from '../../../App'
import {useContextSelector} from "use-context-selector";




const List:FC=()=>{
    const [waterFall, setWaterFall,totalPage, setTotalPage,scrollState, setScrollState,currentPage, setCurrent] = useContextSelector(UserWaterFall,e=>
        [e.waterFall,e.setWaterFall,e.totalPage, e.setTotalPage,e.scrollState, e.setScrollState,e.currentPage, e.setCurrent])
    const [loading, setLoading] = useState(true)
    const [isBottom, setBottom] = useState(false)


    let total = 0;

    const getUserList=()=>{

       let params:{
            page: currentPage,
            size: 10
        }


        // service.User.getList(config)
        //     .then(({data})=>{
        //         const {content,total:totalPage} = data.data
        //         setWaterFall(waterFall=>[...waterFall, ...content])
        //
        //         setTotalPage(totalPage)
        //
        //         if(totalPage%10 !== 0){
        //             total = Math.floor(totalPage/10) + 1
        //             sessionStorage.setItem('total123',total)
        //         }else {
        //             total = Math.floor(totalPage/10)
        //             sessionStorage.setItem('total123',total)
        //         }
        //         setLoading(false)
        //         setBottom(false)
        //     })
    }

    const infiniteScroll=()=>{
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if(clientHeight + scrollTop > scrollHeight){
            let totals = sessionStorage.getItem('total123')
            if(parseInt(totals) === currentPage)return
            setBottom(true)
            setCurrent((currentPage) => currentPage + 1)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            window.scrollTo(0, parseInt(scrollState));
        },100)
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',infiniteScroll)
        return()=>{
            window.removeEventListener('scroll',infiniteScroll)
        }
    },[currentPage])

    useEffect(()=>{
        if(waterFall.length===0){
            getUserList()
        }else if(isBottom){
            getUserList()
        }else {
            setLoading(false)
        }

    },[currentPage])


    if(loading)return <>載入中....</>

    return(
        <div>
            <div className={'p-3'}>
                <h1 className={'ml-6 text-xl'} >會員管理(列表式)</h1>
            </div>
            <div className={'px-8'}>
                {
                    waterFall && waterFall.map((item,index)=>{
                        return(
                            <div key={item._id} className={'p-5 mb-6 border-2 border-black rounded flex justify-between'}>
                                <div>
                                    {index + 1}.
                                    姓名:{item.name} |
                                    帳號:{item.username} |
                                    角色:{item.role}
                                </div>
                                <div>
                                    <Link to={'/user/userDetail'} onClick={()=> {
                                        setScrollState(window.pageYOffset)
                                        // setCurrent(currentPage)
                                    }}><h2 className={'text-blue-400'}>詳情</h2></Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default List
