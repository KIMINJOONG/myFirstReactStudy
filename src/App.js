import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title : "Matrix"
    , poster : "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
    }
    , {
        title: "Full Metal Jacket"
        , poster: "http://image.cine21.com/resize/cine21/poster/2009/1007/M0010010_[X230,330].jpg"
    }, {
        title: "Oldboy"
        , poster : "http://image.cine21.com/resize/cine21/poster/2009/1007/M0010010_[X230,330].jpg"
    }
    , {
        title : "Star Wars"
        , poster : "https://upload.wikimedia.org/wikipedia/ko/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
    }
    
]

class App extends Component {
    
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
    
    state = {
        greeting : "Hello"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                greeting : "Hello again!"
            });
        }, 2000);
    }
    
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
