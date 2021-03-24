import React, {useState} from 'react';
import Input from '../../src/components/Input/Input';
import './Form.css';


const Form = () => {
    const [Data,setData] = useState(
     {
         
             name:{
                 elementtype:'input',
                 elementConfig:{
                     type:'text',
                     placeholder:'Your Name',
                     labelname:'Name:'
                 },
                 value:'',
             },
             email:{
                elementtype:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Mail',
                    labelname:'E-mail:'
                },
                value:'',
             },
             password:{
                elementtype:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Password',
                    labelname:'Password:'
                },
                value:'',
             }
         
     }
    );
   const formElementsArray = [];
  for( let key in Data){
      formElementsArray.push({
          id:key,
          Config:Data[key]
      })
    
  }
   const valueUser = (event,inputID) =>{
       const updateData = {...Data};
        const updateDataElement = { ...updateData[inputID]};
         updateDataElement.value = event.target.value;
         updateData[inputID] = updateDataElement;
          setData(updateData);
   }
   
    return (
        <form className='form'>
           {formElementsArray.map((itemArray=>{
               return <Input key={itemArray.id} elementtype={itemArray.Config.elementtype} 
               elementConfig={itemArray.Config.elementConfig} value={itemArray.Config.value} change={(e)=>valueUser(e,itemArray.id)}/>;
           }))}
           <button type='submit' >Enviar</button>
        </form>
    )
}

export default Form;