import React, { Component } from 'react'

 class Conditionals extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggenin:false
    }
  }
    render() {

        let message
        if(this.state.isLoggenin){
         message= <div>Welcome my man</div>
        }
        else{
            message= <div>Welcome who ever the fuck you are</div>
        }
        
    return (
      <div>{message}</div>
    )
  }
}

export default Conditionals