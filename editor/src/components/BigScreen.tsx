import React, {useState, useEffect} from 'react';
import { DropDetails } from '../models/DropDetails';
import Drag from './Drag';


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

    const [dropOrder, setDropOrder] = useState<DropDetails[]>([]);
    
    return(
        <section>
        <div className="LeftSidedraggables">{imageList.map((image,i)=>{
            return <Drag id={image.id} text={image.text} key={i}/>
        })}</div>
        <div className="Board"></div>
        </section>
        )
    }

export default BigScreen;