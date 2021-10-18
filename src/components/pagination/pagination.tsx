import React, {Dispatch, SetStateAction} from 'react'
import Pages from './pages'


interface IProp {
    totalPage:number ;
    currentPage:number;
    setCurrent:Dispatch<SetStateAction<number>>
}

const Pagination=({totalPage,currentPage,setCurrent}:IProp)=>{


    let total = 0;

    if(String(totalPage).length%10 !== 0){
        total = Math.floor(totalPage/10) + 1
    }else {
        total = Math.floor(totalPage/10)
    }



  return(
    <div className={'flex justify-center'}>
        <Pages total={total} currentPage={currentPage} setCurrent={setCurrent}/>
    </div>
  )
}

export default Pagination
