import React,{Component} from 'react';
import './Person.css';




class Person extends Component{

constructor(props){

  super(props)
  console.log("[Person.js] inside constructor");
}

componentWillMount(){
  console.log("[Person.js] inside componentWillMount");
}

componentDidMount(){
  console.log("[Person.js] inside componentDidMount");
}

render(){

console.log("[Person.js] inside render");


  return(

    <div  className="Person">

   <p  onClick={this.props.click}> my name is</p><p style={{backgroundColor:'yellow'}}> {this.props.name}</p>  <p onClick={this.props.click}> and my age is {this.props.age}</p>

   <input type="text" onChange={this.props.change} value={this.props.name}/>



    </div>
  )
}
}

export default Person;
