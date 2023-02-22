import React from 'react';
import { useDrag } from 'react-dnd'


//Our drag component
function Drag(props: {id: Number, text: string}): JSX.Element {

    // Need to add styling to make them look nicer

    const [{isDragging}, drag]= useDrag(()=>({
        type : "Text" || "Image",
        item : {id: props.id},
        collect : (monitor)=>({
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