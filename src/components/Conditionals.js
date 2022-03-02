import React, { Component } from 'react'

 class Conditionals extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggenin:false
    }
  }
    render() {
return(
        this.state.isLoggenin ?
        <div>welcome mahima purshu shekar</div>
        : <div>oh you again please create an account</div> 
)
}
 }

export default Conditionals