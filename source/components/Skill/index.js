// Core
import React from 'react';

export default (props) => {
    const { title, points } = props;
    const skillPointsJSX = [...Array(10).keys()].map((a) => (
        <li
            className = { a >= points ? 'inactive' : null }
            key = { a }
        />
    ));

    return (
        <div className = 'skill'>
            <span>{ title }</span>
            <ul>
                { skillPointsJSX }
            </ul>
        </div>
    );
};
