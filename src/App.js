import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

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

    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;