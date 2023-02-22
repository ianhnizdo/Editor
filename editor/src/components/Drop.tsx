import React, {ReactEventHandler, useState, useRef} from 'react';
// npm install @mui/material @emotion/react @emotion/styled 
import Button from '@mui/material/Button'
import { DropDetails } from '../models/DropDetails';
// import Img from 'C:/Users/ADMIN/Downloads/Upload.jpg';


// function Drop(props : {stringArr: DropDetails[]}): JSX.Element {

function Drop(props : {key: Number, type: String, src: String}): JSX.Element {

    const hiddenFileInput=useRef(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const src = reader.result as string;
            //   setElements((prevElements) => [...prevElements, { type: "image", src }]);
      
            }
        }
    }

    const fileUpload=(event: React.MouseEvent)=>{
        
    }
    

    if(props.type==="text"){
        return(
            <div className="Drop">
                <input type="text" id="text-right"></input>
            </div>
        )
    }else if(props.type==="image"){
        return (
            <div className="Drop">
                <input
                    type="file"
                    accept="image/*"
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                    id="contained-button-file"
                    onChange={handleFileChange}
                />
                <label htmlFor="imageUpload">
                <Button variant="contained" color="primary" component="span" onClick={(e)=>fileUpload(e)}>
                    Upload
                </Button>
                </label>
            </div>
            );
        }
                 
    
    return(
        <div>

        </div>
    )

}

export default Drop;