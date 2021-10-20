import React, {useState, useRef, FC, ReactNode, ChangeEvent} from 'react'
import ReactDOM from 'react-dom'
import Portal from "@/components/tooltip/portal";
import styled from 'styled-components'

interface styleProp {
  show: number
  posRef: {
    current: {
      x: number
      y: number
    }
  }
}

const StyleToolTip = styled.span`
  position: fixed;
  top: ${(p: styleProp) => p.posRef.current.y}px;
  left: ${(p: styleProp) => p.posRef.current.x}px;
  background: white;
  border: 1px white;
  z-index:9999;
  opacity:${(p: styleProp)=>p.show}
`;

const getPoint=(el: EventTarget & HTMLInputElement, tt: HTMLSpanElement, placement:string, space:number)=>{
  const pt={x:0, y:0}
  const elRect = el.getBoundingClientRect()
  switch (placement) {
    default:
      pt.x = elRect.right + space;
      pt.y = elRect.top + (el.offsetHeight  - tt.offsetHeight) / 2;
      break;
  }
  return pt
}

interface IProps {
  text:string;
  placement:string;
  space:number;
}



const ToolTip:FC<IProps>=({text, placement='right', space=10, children})=>{
  const posRef = useRef<{x:number,y:number}>({x:0,y:0})
  const tooltipRef = useRef()as React.MutableRefObject<HTMLSpanElement>;
  const [show, setShow] = useState(0)
  const handleOver=(e:ChangeEvent<HTMLInputElement>)=> {
    setShow(1)
    posRef.current = getPoint(e.currentTarget, tooltipRef.current, placement, space)
  }
  const handleOut=()=> setShow(0)
  return <>
    {
      React.cloneElement(children as React.ReactElement<any>,{
        onMouseOver:handleOver,
        onMouseOut: handleOut
      })
    }
    <Portal>
      <StyleToolTip ref={tooltipRef} posRef={posRef} show={show}>{text}</StyleToolTip>
    </Portal>
  </>

}


export default ToolTip

