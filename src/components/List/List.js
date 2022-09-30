import React from 'react';
import './List.css';

const List = (props) => {
    console.log(props.time);
//     let totalTime = 0;
//     for (const readingTime of time){
//     totalTime = totalTime + readingTime;
//    }
    return (
        <div>
            <h3>Study Details</h3>
            <div className="study-time">
                <div>
                    <h4>Study Time</h4>
                </div>
                <div>
                    {/* <h4>{totalTime}</h4> */}
                </div>
            </div>
            <div className="break-time">
                <div>
                    <h4>Break Time</h4>
                </div>
            </div>
        </div>
    );
};

export default List;