// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import Contacts from '../Contacts/';
import Education from '../Education/';

@hot(module)
export default class BottomRow extends Component {
    render () {
        return (
            <div className = 'bottomRow'>
                <Contacts />
                <Education />
            </div>
        );
    }
}
