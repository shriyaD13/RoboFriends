import React, { Component } from 'react';
import CardList from '../components/cardlist';
import { robots } from '../components/robots';
import SearchBox from '../components/searchbox';
import './app.css'
import Scroll from '../components/scroll';



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchFields : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchFields: event.target.value})
    }

    render(){
        const {robots, searchFields} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchFields.toLowerCase())
        })
        return(
            <div className = "tc">
                <h1 className = "f1">ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filterRobots}/>
                </Scroll>
               
            </div>
        );
    }
}

export default App;



// State: simply an object that describes the app
//        here Robots
//       can be changed
// props: come out of states
//        as soon as a child recieves a state its a property which it cannot change