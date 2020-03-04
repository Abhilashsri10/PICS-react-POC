import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Axios from 'axios';//just convention to put it above the component
import SearchBar from './SearchBar';
import apiComp from './api/unsplash.js';
import ImageList from './imageList.js';


class App extends React.Component {
  state={images: []};
  onSearchSubmit=async (term)=>{
    const response=await apiComp
      .get('/search/photos',{
        params:{query: term}   
          });
          /*.then((response)=>{
          console.log(response.data.results[0].urls.regular);
      });*/;
      //console.log(this);
      this.setState({ images:response.data.results });
    };


  render(){
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

export default App;
