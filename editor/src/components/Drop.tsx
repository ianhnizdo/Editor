import React, {useState} from 'react';
import Button from '@mui/material/Button'
import PhotoCamera from '@mui/material'
import IconButton from '@mui/material'
// npm install @mui/material @emotion/react @emotion/styled 
import { DropDetails } from '../models/DropDetails';



function Drop(props : {stringArr: DropDetails[]}): JSX.Element {
    //This will keep our order of drops. It will be an array to preserve order.
    // const [dropOrder, setDropOrder] = useState<DropDetails[]>([])

    // const imageUpload = (e: React.MouseEvent) => {
    //     e.preventDefault();

    // }
    
    return (
        <section className="Drop">

            {/* Render the dropped components */}
            {props.stringArr.map((item, index)=>{
                if(item.type === "text"){
                    return(
                        <input type="text" id={String(index)} draggable></input>
                    )
                }else if(item.type === "image"){
                return (
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>

                    // <div className="imageContainer">

                    // <input type="file" accept="image/*" id="contained-button-file"/>
                    // <label htmlFor="container-button-file">
                    //     <Button type="button" onClick={(e)=>imageUpload(e)}>Upload your image</button>
                    // </label>
                    // </div>
                )}
            })
            }
        </section>
    )
}

export default Drop;