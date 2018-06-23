// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Theme
import profileImage from '../../theme/assets/images/elon-musk';

@hot(module)
export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div>
                    <h1>Nikita</h1>
                    <span>Предприниматель, изобретатель, инженер, инвестор</span>
                    <p>Стремлюсь сократить глобальное потепление за счёт устойчивого производства потребления энергии и снижения «риска исчезновения человека», сделав жизнь многопланетной и создав человеческую колонию на Марсе.</p>
                </div>
                <img src = { profileImage } />
            </div>
        );
    }
}
