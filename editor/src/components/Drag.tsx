import React, { ReactEventHandler, useRef, useEffect, useState } from 'react';
import { useDrag } from 'react-dnd'
import { DropDetails } from '../models/DropDetails';


//Our drag component
function Drag(props: {id: Number, text: string}): JSX.Element {

    // const [mousePosition, setMousePosition] = useState<{x: Number | null, y: Number | null}>({x: null, y: null});
    // const dragItem = useRef();

    // useEffect(()=>{
    //   const updateMousePosition = (ev : MouseEvent)  => {
    //     setMousePosition({ x: ev.clientX, y: ev.clientY });
    //   };
  
    //   window.addEventListener('mousemove', updateMousePosition)
    // }, [])


    // const dragStart = (input: React.DragEvent<HTMLDivElement>, id: string, position: Mouse) => {
    //         dragItemItem.current=position;
    // }

    // const handleDrag = (input: Event, id: string) => {

    // }

    // const dropEvent = (input: Event, id: string) => {

    // }

    // Need to add styling to make them look nicer

    const [{isDragging}, drag]= useDrag(()=>({
        type: props.text,
        collect: (monitor)=>({
            // Return true or false based on whether or not the component is being dragged.
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div className="Drag" ref={drag} id={String(props.id)} style={{border: isDragging ? "5px solid blue" : "0px"}}>
            {props.text}
            </div>
    )
}

export default Drag;