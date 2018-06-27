import React,{PureComponent} from 'react';
import Person from './person/Person.js'

class Persons extends PureComponent{
constructor(props){

console.log("[Persons.js] inside constructor");
  super(props)
}

componentWillMount(){
  console.log("[Persons.js] inside componentWillMount");
}

componentDidMount(){
  console.log("[Persons.js] inside componentDidMount");
}

componentWillReceiveProps(nextprops){
  console.log("Persons.js update] inside componentWillReceiveProps",nextprops);
}

/*shouldComponentUpdate(nextprops,nextstate){
  console.log("Persons.js update] inside shouldComponentUpdate");
  return  nextprops.person !==this.props.person || nextprops.changed !== this.props.changed || nextprops.Showperson !== this.props.Showperson
}
*/
render(){

console.log("[Persons.js] inside render");
  return this.props.person.map((per,index)=>{
  return(
    <Person

     name={per.name}
     age={per.age}
     click={this.props.clicked.bind(this.props,index)}
     change={(event)=>this.props.changed(event,per.id)}
     key={per.id}
     />
   )});
}




}
export default Persons;
