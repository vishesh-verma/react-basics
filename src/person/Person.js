import React from 'react';
import './Person.css';
import Trans from 'react-transition-group/Transition'
import Person2 from './Person2.js'



const Person = (pro) =>{




  return(<div  className="Person">

   <p  onClick={pro.click}> my name is</p><p style={{backgroundColor:'yellow'}}> {pro.name}</p>  <p onClick={pro.click}> and my age is {pro.age}</p>

   <input type="text" onChange={pro.change} value={pro.name}/>



    </div>
  )
};


export default Person;
