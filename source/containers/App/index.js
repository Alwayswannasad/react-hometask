// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import Header from "../../components/Header";
import Content from "../../components/Content";

@hot(module)
export default class App extends Component {
    render () {
        return (
            <>
                <Header />
                <Content />
            </>
        );
    }
}
