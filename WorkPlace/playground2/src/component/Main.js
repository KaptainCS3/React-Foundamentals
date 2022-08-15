import React from "react";
import gridImg from '../images/Group 77.png'

const Main = () =>{
       return (
       <main>
            <img src={gridImg} />
            <h1 className="hero">
                Online Experience
            </h1>
            <p className="description">
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
        </main>
       )
}

export default Main