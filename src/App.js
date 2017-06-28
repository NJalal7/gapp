import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import LoadMore from './components/LoadMore';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.searchGifs('kittens');
  }

  searchGifs = (searchQuery) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=6&api_key=dc6zaTOxFJmzC`).then(data => data.json())
      .then(response => {
        this.setState({
          results: response.data,
        });
                  console.log("searchQuery", searchQuery);
     });
  }


  searchMoreGifs = (offsetQuery) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${offsetQuery}&limit=6&offset=${this.state.results.length}&api_key=dc6zaTOxFJmzC`).then(data => data.json())
      .then(response => {
          this.setState(prevState => ({ results: [...prevState.results, ...response.data] }))
          console.log("offsetQuery", offsetQuery);
        }
     );
  }



  render() {
    return (
      <main className="app">
        <Header />
        <SearchForm startSearch={this.searchGifs} />
        <ResultList gifs={this.state.results} />
        <LoadMore searchMore={() => this.searchMoreGifs(this.state.results)} />
      </main>
    );
  }
}

export default App;
