import React, { ReactEventHandler, useRef } from 'react';

//Our drag component
function Drag(): JSX.Element {

    const dragIgtem = useRef();

    const dragStart = (input: React.DragEvent<HTMLDivElement>, id: string) => {

    }

    const handleDrag = (input: Event, id: string) => {

    }

    const dropEvent = (input: Event, id: string) => {

    }

    return (
        <section className="Drag">

            <div className="TextDrag"
                style={{
                    position: "absolute"
                }}
                onDragStart={(event)=>dragStart(event, "text")}
                onDrag={(event)=>handleDrag(event, "text")}
                onDragEnd={(event)=>dropEvent(event, "text")}
                draggable="true"
            >
                Text
            </div>

            <div className="ImageDrag"
                style={{
                    position: "absolute",
                    left: x,
                    top: y
                }}
                draggable="true"
                onDragStart={(e)=>dragStart(e)}
                onDrag={(e)=>handleDrag(e)}
                onDragEnd={(e)=>dropEvent(e)}
            >
                Image
            </div>

        </section>
    )
}

export default Drag;