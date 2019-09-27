import React from 'react';
import PropTypes from 'prop-types';
import '../PageLabs.css';
function EntryInfoDisplayer(props){
    const {content, header}=props;
    return(
        <table className='lab-entry-container'>
            <thead>
                <tr>
                    {header.map(h=>(<th className='lab-entry-display-header'>{h}</th>))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {content.map(c=>(<td className='lab-entry-display-content'>{c}</td>))}
                </tr>
            </tbody>
        </table>
    );
}   

EntryInfoDisplayer.propTypes={
    content: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired
}

export default EntryInfoDisplayer;
