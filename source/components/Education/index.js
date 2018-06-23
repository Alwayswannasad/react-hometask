// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Data
import education from '../../theme/assets/data/education';
// Components
import Titles from '../Titles/';
import EducationPLace from '../EducationPlace/';

@hot(module)
export default class Education extends Component {
    render () {
        const educationJSX = education.map((educate) => (
            <EducationPLace
                key = { educate.id }
                { ...educate }
            />
        ));
        const options = {
            number: '04.',
            title:  'Образование',
        };
        const date = new Date().getFullYear();

        return (
            <section className = 'education'>
                <Titles number = { options.number } title = { options.title } />
                { educationJSX }
                <span className = 'copyright'>{ date } © Илон Маск</span>
            </section>
        );
    }
}
