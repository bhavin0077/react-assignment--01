import React from "react"
import "./style.css"
import Button from "./Button"

const Apple=()=>{
    return(
        <div>
            <h1 style={{ textAlign : "center"}}> Hello world</h1> <hr></hr>
            <h2> Hello youtubers</h2> 
            <div className="Button">
            <Button buttonText="Apple"/>
            <Button buttonText="Gauva"/>
            <Button buttonText="Orange"/>
            
            </div>
       </div>
       
    )
}

export default Apple