import React from 'react';
import  './Input.css';

const Input = (props)=>{
    let inputElement = null;
    switch(props.elementtype){
       case('input'): 
        inputElement = <input className='InputElement' {...props.elementConfig} value={props.value} onChange={props.change}/>;
        break;
        case ('textarea'):
            inputElement = <textarea  className='textAreaElement' {...props.elementConfig} value={props.value}/>;
            break;
            default:
                inputElement = <input  {...props.elementConfig} value={props.value}/>;
    }
    
    return(
        <>
            <label className='labelElement' >{props.elementConfig.labelname}</label>
            {inputElement} 
        </>
    )
}

export default Input;