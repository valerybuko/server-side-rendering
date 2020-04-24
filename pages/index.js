import React, { Component } from 'react';
import './index.css';
import Card from "./Card";
import data from '../data/data.json';

export default class Index extends Component {
    static async getInitialProps() {
        return { cards: data }
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img
                        src="/static/logo.png"
                        className="static-logo"
                        alt="logo"
                    />
                </header>
                <div className="Grid">
                    {
                        this.props.cards.map( card => <Card key={card.id} />)
                    }
                </div>
            </div>
        )
    }
}
