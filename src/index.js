import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyClsGj7v1_sBcypLIgZUtHkwr9SmWVEPT8';



// Create a new componenet. This comonent should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
   );
  }

};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
