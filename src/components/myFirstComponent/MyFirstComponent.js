import React from 'react'
import './MyFirstComponent.css'

export const MyFirstComponent = (props)=>{
    return(
        <div>
        <h1 className="title"> 
        {props.name}
        {props.age}
        </h1>
        
        </div>
    )
}