import React from 'react'

const button = ({option}) => {
    return (
        <div>
        <label>Severe strom</label>
           <input type="radio" checked={true}></input>
        <label>Volcanos</label>
        <input type="radio" checked={false}></input> 
        </div>
    )
}

export default button
