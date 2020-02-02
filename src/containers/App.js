import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { render } from '@testing-library/react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // state is things that can change within our program or define program
      // state usually lives in the parent component
      robots: [],
      searchField: ''
    };
  }

  // based on https://jsonplaceholder.typicode.com/
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    // important to always use arrow functions for helper methods
    this.setState({ searchField: event.target.value }); // must use this to change state, this case update searchfield
  };

  render() {
    const { robots, searchField } = this.state; // destructuring
    const filteredRobots = robots.filter(robot => {
      // return array of robots whose name is matched by serach event
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      // if length is 0
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />{' '}
            {/* output the filtered roboits instead of all robots */}
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
