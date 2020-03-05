import React from 'react'
import Clicker from './like'
function Band({ name, fans, formed, origin }) {   
 return (

 <div>
    <h2> {name} </h2>
    <p>Formed: {formed}</p>
    <p>{fans} fans</p>
    <p>Country: {origin}</p>
    {/* <p>{data.desc}</p> */}
    <Clicker />
</div>
   
 )
}

export default Band;