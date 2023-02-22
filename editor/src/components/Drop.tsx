import React, {useState} from 'react';
// npm install @mui/material @emotion/react @emotion/styled 
import Button from '@mui/material/Button'
import { DropDetails } from '../models/DropDetails';



// function Drop(props : {stringArr: DropDetails[]}): JSX.Element {

function Drop(props : {key: Number, type: String}): JSX.Element {

    if(props.type==="text"){
        // console.log(props.type);
        return(
            <div className="Drop">
                <input type="text" id="text-right"></input>
            </div>
        )
    }else if(props.type==="image"){
        // console.log('image');
        return (
            <div className="Drop">
                <button>
                    Upload your image!
                </button>
            </div>
            );
        }
        else{
            return(<div></div>)
        }
                 
}

export default Drop;