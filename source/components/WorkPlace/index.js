// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Data
import workPlace from '../../theme/assets/data/experience';
//Components
import Work from '../Work/';
import Titles from '../Titles/';


@hot(module)
export default class WorkPlace extends Component {
    render () {
        const workPlaceJSX = workPlace.map((place) => (
            <Work
                key = { place.id }
                { ...place }
            />
        ));
        const options = {
            number: '02.',
            title:  'Опыт работы',
        };

        return (
            <section>
                <Titles number = { options.number } title = { options.title } />
                { workPlaceJSX }
            </section>
        );
    }
}
