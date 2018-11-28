import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
    
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {}

    componentDidMount() {
        fetch('https://yts.am/api/v2/list_movies.json?quality=3Dsort by=rating')
    }

_renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
}
    
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
