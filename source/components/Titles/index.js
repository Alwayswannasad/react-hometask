// Core
import React from 'react';

export default (props) => {
    const { number, title } = props;

    return (
        <section className = 'sectionHeading'>
            <h1>
                <span className = 'sectionNumber'>{ number }</span>
                <span className = 'sectionName'>{ title }</span>
            </h1>
        </section>
    );
};
