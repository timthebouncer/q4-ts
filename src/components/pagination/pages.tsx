import React, {Dispatch, FC, SetStateAction} from "react";
import {chevronLeft, chevronRight} from '../../Icon/svg'
import './pages.css'


interface IProp {
  total:number;
  currentPage:number;
  setCurrent:Dispatch<SetStateAction<number>>
}


const Pages:FC<IProp>=({total,currentPage,setCurrent})=>{
  let pages =[];

  const pageClick = (e:  React.MouseEvent<HTMLLIElement>,i:number) => {
    const value = e.target as HTMLElement;
    if(i === parseInt(value.innerHTML)-1){
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
    pages.push(<li key={i} onClick={(e)=>pageClick(e,i)} className={ currentPage === i? 'active':'unactivated'}>{i+1}</li>)
  }
  pages.unshift(<span className={'mt-1'} onClick={pageLeft}>{chevronLeft}</span>)
  pages.push(<span className={'mt-1'} onClick={pageRight}>{chevronRight}</span>)

  return <div className={'flex'}>{pages}</div>

}

export default Pages
