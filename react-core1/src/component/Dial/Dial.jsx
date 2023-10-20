import React from 'react';
import Knn from '../Knn/Knn';

const Dial = (props) => {
    console.log(props)
    return (
        <div className='container1'>
        <h4>This is Dial Component</h4>
            <p>Your Steps Count: {props.steps} </p>

            <Knn stepes={props.steps}></Knn>
        </div>
    );
};

export default Dial;