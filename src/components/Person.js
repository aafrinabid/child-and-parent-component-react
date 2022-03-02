import React from 'react'

function person({person}) {
  return (
    <div><h1> i am {person.name} and my age is {person.age} and i am an expert in {person.expert}</h1></div>
  )
}

export default person