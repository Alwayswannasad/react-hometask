// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import SkillSet from '../SkillSet';
import WorkPlace from '../WorkPlace/';

@hot(module)
export default class TopRow extends Component {
    render () {
        return (
            <div className = 'topRow'>
                <SkillSet />
                <WorkPlace />
            </div>
        );
    }
}
