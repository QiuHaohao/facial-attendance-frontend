import React from 'react';
import PropTypes from 'prop-types';
import '../PageLabs.css';

function LabNameHolder(props){
    const lname=props.lname;
    return(
        <h1 className='lab-name'>Lab Name: {lname}</h1>
    );
}

LabNameHolder.propTypes={
    lname: PropTypes.string.isRequired
}

export default LabNameHolder;