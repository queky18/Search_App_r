import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

// State - the description of your app - an object that describe your application
// State is able to change

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="f2">Search Friends</h1>
                <SearchBox searchChange = { this.onSearchChange }/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;