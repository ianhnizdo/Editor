import React, {useState} from 'react';
import Button from '@mui/material/Button'
import PhotoCamera from '@mui/material'
import IconButton from '@mui/material'
// npm install @mui/material @emotion/react @emotion/styled 
import { DropDetails } from '../models/DropDetails';



// function Drop(props : {stringArr: DropDetails[]}): JSX.Element {

    function Drop(props : {key: Number, type: String}): JSX.Element {

    if(props.type==="text"){
        return(
            <input type="text" id="text-right" draggable></input>
        )
    }else if(props.type==="image"){
        return (
            <Button variant="contained" id="image-right" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            );
        }
        else{
            return(<div></div>)
        }
        
    // return(
    //         <section>
    //             {if(props.type==="text"){
    //                 <input type="text" id="text-right" draggable></input>
    //             }}
    //         </section>
    //     )
    //                 // <div className="imageContainer">

                    // <input type="file" accept="image/*" id="contained-button-file"/>
                    // <label htmlFor="container-button-file">
                    //     <Button type="button" onClick={(e)=>imageUpload(e)}>Upload your image</button>
                    // </label>
                    // </div>
             
}

export default Drop;