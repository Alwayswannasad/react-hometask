// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Data
import skillSet from '../../theme/assets/data/skillset';
// Components
import Skill from '../Skill/';
import Titles from '../Titles/';

@hot(module)
export default class SkillSet extends Component {
    render () {
        const skillSetJSX = skillSet.map((skill) => (
            <Skill
                key = { skill.id }
                { ...skill }
            />
        ));
        const options = {
            number: '01.',
            title:  'Набор скиллов',
        };

        return (
            <section className = 'skillset'>
                <Titles number = { options.number } title = { options.title } />
                { skillSetJSX }
            </section>
        );
    }
}
