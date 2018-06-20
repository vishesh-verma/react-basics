import React from 'react';
import './Person.css';
import Trans from 'react-transition-group/Transition'




const Person2= (prop) =>{



  return(<div  className="">

 <p>{prop.name}</p>
 <input type="text" onChange={prop.change} value={prop.name} />

    </div>
  )
};


export default Person2;
