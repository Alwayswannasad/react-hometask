// Core
import React from 'react';

export default (props) => {
    const { action, address } = props;

    return (
        <div className = 'contact'>
            <span className = 'action'>{ action }</span>
            <span className = 'address'>{ address }</span>
        </div>
    );
};
