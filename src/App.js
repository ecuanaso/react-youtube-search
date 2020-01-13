//import moduleName from 'module';

import _ from 'lodash';
// What this is saying is go get react
// and allow me to have access to it in this file.
// and assign it to the variable React 
import React, { Component} from 'react';

import YTSearch from 'youtube-api-search';

// import search bar into layout.js
import SearchBar from './components/search_bar';

// import video list into layout.js
import VideoList from './components/video_list';

// import video detail
import VideoDetail from "./components/video_detail";

// Declare a variable to hold Youtube API key. We set it as const
// because were not going to change this API key anytime soon.
const API_KEY = 'AIzaSyC4XvyDMQCjbMre5vuUlviZR0xBXPo2kdM';


class App extends Component {
  constructor(props){
    // You must call super on the first line of a javascript class
    // in 
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };


     this.videoSearch('surfboards');

    
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, 
      term: term }, (videos)=>{
      //console.log(videos);
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){

    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
        <div>
          <h1 className="title text-center"> React Youtube Search </h1>
          <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
          videos={ this.state.videos } />
        </div>

      );
  }
}

export default App;
