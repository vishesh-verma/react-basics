import React,{Component} from 'react'
import Aux from '../../hoc/Aux.js'
import PropTypes from 'prop-types'
class Cockpit extends Component{


render(){
  let classes=[];

  if(this.props.person.length <= 2){
    classes.push('red');
  }

  if(this.props.person.length <= 1){
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


if(this.props.Showperson){
  style.backgroundColor="red"}
else
{
  style.backgroundColor="green"
}


let button_name1="Show Names"
let button_name2="Hide Names"


return(
<Aux>
  <h1 className={classes.join(' ')}>This is the react app </h1>


  <button style={style1} onClick={this.props.switchnames}>Switch names</button>
  <button style={style} onClick={this.props.shownames}>{this.props.Showperson ? button_name2 : button_name1}</button>
</Aux>
)

}

}

Cockpit.propTypes={
  switchnames:PropTypes.func,
  shownames:PropTypes.func,
  Showperson:PropTypes.bool,
}
export default Cockpit;
