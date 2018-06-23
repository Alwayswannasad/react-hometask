// Core
import React from 'react';

export default (props) => {
    const { period, eduspace, degree } = props;

    return (
        <div className = 'eduspace'>
            <span className = 'period'>{ period }</span>
            <span className = 'eduspace'>{ eduspace }</span>
            <span className = 'degree'>{ degree }</span>
        </div>
    );
};
