import React from "react";

export default function Headpart(){
return(
    <div className="Headpart">
        <img className="profile" src={require('./Heads.png')} alt='Heads'/>
        <p className="name">Eshaq Miah</p>
        <p className="passion">Software Engineer</p>
    </div>
)
}