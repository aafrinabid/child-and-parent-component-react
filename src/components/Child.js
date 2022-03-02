import React from 'react'

function Child(props) {
  return (
    <button onClick={()=>props.greetHandler("child")}>greet parent</button>
  )
}

export default Child