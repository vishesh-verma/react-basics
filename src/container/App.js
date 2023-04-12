import React, { PureComponent } from 'react';

import Persons from '../components/persons/Persons'
import './App.css'
import Cockpit from '../components/cockpit/cockpit'
class App extends PureComponent {

constructor(props){

  super(props)

  this.state={
    person:[
      {id:'x1122', name:"vishesh verma",age:21},
      {id:'y2211',name:"nidhi verma",age:21},
      {id:'h2232',name:"saloni verma",age:22}
  ],
  otherstate:'vishesh is the protagnist',
  status:true,
  Showperson:false,
  toggle_no:0,

  }

  console.log("[App.js] inside constructor",props);
}


componentWillMount(){
  console.log("[App.js] inside componentWillMount");
}

componentDidMount(){
  console.log("[App.js] inside componentDidMount");
}
/* shouldComponentUpdate(nextprops,nextstate){
  console.log("[App.js] inside shouldComponentUpdate");
  return nextstate.person !== this.state.person || nextstate.Showperson !== this.state.Showperson
*/

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


  this.setState((prevState,props)=>{
    return{
      Showperson:!this.state.Showperson,
      toggle_no:prevState.toggle_no + 1,
    }
  })
console.log(this.state.Showperson);
console.log(this.state.toggle_no);
}


deletelEventHandler = (personindex) =>{
const persons = [...this.state.person];
persons.splice(personindex,1);
this.setState({person:persons})
}



  render() {
console.log("[App.js] inside render");

let person=null
if(this.state.Showperson===true){
person =(
  <div>
  <Persons
  person={this.state.person}
  clicked={this.deletelEventHandler}
  changed={this.nextEventHandler}
  Showperson={this.state.Showperson}/>

  </div>
)}


    return (
      <div className='App'>

<button onClick={()=>{this.setState({Showperson:true})}}>shownames</button>

<Cockpit
 person={this.state.person}
 Showperson={this.state.Showperson}
 shownames={this.togglePersonsHandler}
 switchnames={this.eventNameHandler.bind(this,"ayush","shubhangi")}
/>



{person}
      </div>
    );
  }
}

export default App;
