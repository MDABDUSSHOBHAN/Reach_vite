import React from 'react';
import './Device.css'
import Dev from '../Devicedet/Dev';
const Device = (props) => {
    console.log(props)
    return (
        <div className='container'>
            <h3>I have a Device_{props.name} </h3>
            <p>Price {props.price}</p>
            <Dev price={props.price}></Dev>
        </div>
    );
};

export default Device;