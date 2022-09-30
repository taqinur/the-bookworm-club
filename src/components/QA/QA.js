import React from 'react';
import './QA.css'

const QA = () => {
    return (
        <div className='qa'>
            <h3>1. How Does React work?</h3>
            <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            <h3>2. Difference between props and state?</h3>
            <p>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h3>3. Where useEffect is used except dataload? </h3>
            <p>Answer: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.</p>

        </div>
    );
};

export default QA;