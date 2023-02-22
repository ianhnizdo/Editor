import React, {useState, useEffect} from 'react';
import { DropDetails } from '../models/DropDetails';
import Drag from './Drag';
import Drop from './Drop';
import {useDrop} from 'react-dnd';


const imageList=[
    {
        id: 1,
        text: "Text"
    },
    {
        id: 2,
        text: "Image"
    }
];

function BigScreen(): JSX.Element {

    const [dropOrder, setDropOrder] = useState<any[]>([]);
    
    //Certain piece of information from dropping and reference
    const [{isOver}, drop]= useDrop(()=>({
        accept: "Text" || "Image",
        drop: (item: {id: Number} )=>addImageToBoard(item.id),
        collect: (monitor)=>({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addImageToBoard = (id : Number) =>{
       const filteredList = imageList.filter((el)=>el.id===id);
       let obj = {type: ''};
       obj.type = filteredList[0].text==="Text" ? "text" : "image";
       setDropOrder([...dropOrder, obj]);
    }

    return(
        <section className="GrandDisplay">
        <div className="LeftSideDraggables">{imageList.map((image,i)=>{
            return <Drag id={image.id} text={image.text} key={i}/>
        })}</div>
        <div className="MainBoard">
            {dropOrder.map((el,i)=>{
                return <Drop key={i} type={el.type}/>
            })}
        </div>
        </section>
        )
    }

export default BigScreen;