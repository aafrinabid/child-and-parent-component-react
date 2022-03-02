import React, { Component } from 'react'

 class Conditionals extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggenin:true
    }
  }
    render() {
return( this.state.isLoggenin && <div>welcome my chinkudu bangadu</div>)
  }
}

export default Conditionals