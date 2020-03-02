import React from 'react'

import './TwoColumns.scss';

const TwoColumns = ({left, right, /* bottom */ }) => {
        return(
    <div className="columns">
    <div className="columns__left">{left}</div> 
    <div className="columns__right">{right}</div> 
    { /* <div>{bottom}</div> */ }
    </div>
        );        
};

export default TwoColumns 




