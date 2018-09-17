import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// State - the description of your app - an object that describe your application
// State is able to change

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( users => this.setState( { robots : users }) );   
    }

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value });
    }

    render() {

        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ? <h1>Loading</h1> :
            <div className='tc'>
                <h1 className="f2">Search Friends</h1>
                <SearchBox searchChange = { this.onSearchChange }/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
    }
}

export default App;