// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import BottomRow from '../BottomRow/';
import TopRow from '../TopRow/';

@hot(module)
export default class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <div>
                    <TopRow />
                    <BottomRow />
                </div>
            </div>
        );
    }
}
