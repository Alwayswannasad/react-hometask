// Core
import React from 'react';

export default (props) => {
    const { period, position, location, company } = props;

    return (
        <div className = 'workplace'>
            <div className = 'leftColumn'>
                <span className = 'period'>{ period }</span>
                <span className = 'position'>{ position }</span>
            </div>
            <div className = 'rightColumn'>
                <span className = 'location'>{ location }</span>
                <span className = 'company'>{ company }</span>
            </div>
        </div>
    );
};
