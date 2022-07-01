import React from 'react';
import "../styles/oneElement.css"
import brocoli from "../image/brocoli.jpg"

const OneElement = () => {
    return (
        <div id="content-oneElement">
            <img id="image-oneElement" src={brocoli} />
            <h2 id="title-oneElement" >Title</h2>
            <p id="price-oneElement" >$price</p>
        </div>
    );
}

export default OneElement;
