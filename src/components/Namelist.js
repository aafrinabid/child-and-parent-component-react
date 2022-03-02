import React from 'react'
import Person from './Person'

function Namelist() {
   const persons =[ {
        name: ['Bob', 'Smith'],
        age: 32,
       expert:'vue'
        },
        {
            name: ['Jaanu', 'shamir'],
        age: 55,
        expert:'react'
      }
   ]
    

     const personList= persons.map(person=><Person key={person.name} person={person} />)
return (
    <div>{personList}</div>
  )
}

export default Namelist