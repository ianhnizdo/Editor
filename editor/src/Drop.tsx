import React, {useState} from 'react';
import Button from '@mui/material'
import PhotoCamera from @ma
// npm install @mui/material @emotion/react @emotion/styled 

interface DropDetails{
    id: string
}


function Drop(props : DropDetails): JSX.Element {
    //This will keep our order of drops. It will be an array to preserve order.
    const [dropOrder, setDropOrder] = useState<DropDetails[]>([])

    const imageUpload = (e: React.MouseEvent) => {
        e.preventDefault();

    }
    
    return (
        <section className="Drop">

            {/* Render the dropped components */}
            {dropOrder.map((item, index)=>{
                if(item.id==="text"){
                    return(
                        <input type="text" id={String(index)} draggable></input>
                    )
                }else{
                return <div key={index} draggable>
                    <button type="button" onClick={(e)=>imageUpload(e)}>Upload your image</button>
                </div>
                }
            })
            }
        </section>
    )
}

export default Drop;