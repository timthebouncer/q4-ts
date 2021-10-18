import React, {Dispatch, FC, SetStateAction} from "react";
import {chevronLeft, chevronRight} from '../../Icon/svg'
import './pages.css'


interface IProp {
  total:number;
  currentPage:number;
  setCurrent:Dispatch<SetStateAction<number>>
}

const Pages:FC=(props:IProp)=>{
  const {total,currentPage,setCurrent} = props
  let pages =[];
  const pageClick=(i,val)=>{
    if(i === parseInt(val)-1){
      setCurrent(i)
    }
  }

  const pageLeft=()=>{
    if(currentPage === 0)return
    setCurrent(currentPage-1)
  }
  const pageRight=async ()=>{
    if(currentPage === total)return
    await setCurrent(currentPage+1)
  }


  for (let i = 0; i < total; i++) {
    pages.push(<li key={i} onClick={(e:React.MouseEvent<HTMLElement>)=>pageClick(i as number, e.target.innerHTML as any)} className={ currentPage === i? 'active':'unactivated'}>{i+1}</li>)
  }
  pages.unshift(<span className={'mt-1'} onClick={pageLeft}>{chevronLeft}</span>)
  pages.push(<span className={'mt-1'} onClick={pageRight}>{chevronRight}</span>)
  return pages



}


export default Pages
