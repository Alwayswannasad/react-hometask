// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Data
import contacts from '../../theme/assets/data/contacts';
// Components
import Contact from '../Contact/';
import Titles from '../Titles/';

@hot(module)
export default class Contacts extends Component {
    render () {
        const contactsJSX = contacts.map((contact) => (
            <Contact
                key = { contact.id }
                { ...contact }
            />
        ));
        const options = {
            number: '03.',
            title:  'Контакты',
        };

        return (
            <div className = 'contacts'>
                <Titles number = { options.number } title = { options.title } />
                { contactsJSX }
            </div>
        );
    }
}
