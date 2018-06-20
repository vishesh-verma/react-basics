import React, { Component } from 'react';

import Person from './person/Person.js'
import Person2 from './person/Person2.js'

import './App.css'
import Trans from 'react-transition-group/Transition'

class App extends Component {


state={
  person:[
    {id:'x1122', name:"vishesh verma",age:21},
    {id:'y2211',name:"nidhi verma",age:21},
    {id:'h2232',name:"saloni verma",age:22}
],
otherstate:'vishesh is the protagnist',
status:true,
Showperson:false,
showblock:false,
per:[
  {name:"vishesh",
  id:"123"
}
]
}

colorHandler = (event,id)=>{

 const colorid=this.state.per.findIndex(p=>{
   return p.id === id

 })
  const person1={...this.state.per[colorid]}

 person1.name=event.target.value;



console.log(this.state.person1);


}



 eventNameHandler = (newname,newname2) =>{
 //console.log("was clicked")
 console.log();
 console.log(this.state.status);
this.setState({status:!this.state.status})
this.state.status===true ?
this.setState({
   person:[
     {id:'x1122', name:"vishesh verma",age:21},
     {id:'y2211',name:"nidhi verma",age:21},
     {id:'h2232',name:"saloni verma",age:22}
],
otherstate:'vishesh is the protagnist',
})
:

this.setState({
  person:[
    {id:'x1125',name:newname,age:21},
    {id:'x1120',name:newname2,age:21},
    {id:'x1124',name:"anu pandey",age:22}
],
otherstate:'nidhi is the protagnist'
})
}





nextEventHandler = (event,perid) =>{

const personindex= this.state.person.findIndex(p=>{
return p.id === perid;
})

const persons={
  ...this.state.person[personindex]
}
persons.name=event.target.value;

const person =[...this.state.person]
person[personindex]=persons;

this.setState({person: person})

}
togglePersonsHandler = () =>{


  this.setState({Showperson:!this.state.Showperson})
console.log(this.state.Showperson);
}


deletelEventHandler = (personindex) =>{
//const persons=this.state.person.slice(); this is the way to make a copy of state which is a good practice to do
const persons = [...this.state.person];
persons.splice(personindex,1);
this.setState({person:persons})


}
blockHandler = ()=>{

this.setState({showblock: !this.state.showblock})
console.log(this.state.showblock);


}


  render() {



    const classes=[];

    if(this.state.person.length <= 2){
      classes.push('red');
    }

    if(this.state.person.length <= 1){
      classes.push('bold');
}

    const style={
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',

    }

    const style1={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }


  let button_name1="Show Names"
  let button_name2="Hide Names"


let Persons=null;

if(this.state.Showperson){

Persons=(
  <div>
  {
    this.state.person.map((per,index)=>{
    return(
      <Person
       showblockstate={this.state.showblock}
       name={per.name}
       age={per.age}
       click={this.deletelEventHandler.bind(this,index)}
       change={(event)=>this.nextEventHandler(event,per.id)}
       key={per.id}
       />
    )
  })

}


 <button style={style1} onClick={this.eventNameHandler.bind(this,"ayush","shubhangi")}>Switch names</button>
 <a href="http://127.0.0.1:8000/auth/login/google-oauth2/">login with google</a>
  </div>
)


/*
  Persons=(

   <div>

       <p>my name is  {this.state.person[0].name} and  my is age is {this.state.person[0].age} </p>
       <p> {this.state.otherstate} </p>

       <Person name={this.state.person[0].name}  age={this.state.person[0].age} click={this.eventNameHandler.bind(this,"babu")} />
       <Person name={this.state.person[1].name}  age={this.state.person[1].age} change={this.nextEventHandler} />
       <Person name={this.state.person[2 ].name}  age={this.state.person[2].age} />
       <button style={style} onClick={this.eventNameHandler.bind(this,"ayush")}>Switch names</button>
  </div>
  */
style.backgroundColor= "red"

}





    return (
      <div className='App'>
<h1 className={classes.join(' ')}>This is the react app </h1>

<button style={style} onClick={this.togglePersonsHandler}>{this.state.Showperson ===true ? button_name2 : button_name1}</button>
<a href="http://127.0.0.1:8000/logout/">logout</a>
{/*this.state.Showperson ===true ?
  <div>

     <p>my name is  {this.state.person[0].name} and  my is age is {this.state.person[0].age} </p>
     <p> {this.state.otherstate} </p>

     <Person name={this.state.person[0].name}  age={this.state.person[0].age} click={this.eventNameHandler.bind(this,"babu")} />
     <Person name={this.state.person[1].name}  age={this.state.person[1].age} change={this.nextEventHandler} />
     <Person name={this.state.person[2 ].name}  age={this.state.person[2].age} />
     <button style={style} onClick={this.eventNameHandler.bind(this,"ayush")}>Switch names</button>
</div>: null
*/
// we can render the div inside the return as well but its better if we put that into a variable outside the return and render by rfferencing the variable
}
<button  style={style} onClick={this.blockHandler}> showblock </button>

<br />
<br />


  <Trans in={this.state.showblock}
   timeout={200}
   mountOnEnter
   unmountOnExit>
  {state=> (
 <div
  style={{
backgroundColor:'black',
opacity:.25,
width:1000,
height:1000,
margin:'auto',
transition:'transform 1s ease-out',

transform: state === 'entering' ? 'translateX(-150%)' : 'translateX(0%)',

//transform: 'translateX(-100%)',

}}><button  style={{right:1000}} onClick={this.blockHandler}> showblock </button>
</div>
)}

</Trans>

<Person showblockstate={this.state.showblock} />


{Persons}


<Person2 name={this.state.per.name} change={(event)=>this.colorHandler(event,this.state.per.id)} />
      </div>
    );
  }
}

export default App;
