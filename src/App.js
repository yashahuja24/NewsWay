import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
class App extends Component
{
  apikey=process.env.REACT_APP_NEWS_API_KEY;
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      progress:0
    };
  };
  handleSearch=(query)=>{
    this.setState({searchQuery:query});
  };
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render()
  {
    return(
      <div>
        <BrowserRouter>
         <Navbar onSearch={this.handleSearch}/>
         <LoadingBar
          color="#f11946"
          height={3}
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
         />
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route exact path="/home" element={<News setProgress={this.setProgress} apikey={this.apikey}key="general" category="general" text={this.state.searchQuery}/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}key="business" category="business" text={this.state.searchQuery}/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" category="entertainment" text={this.state.searchQuery}/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}key="health" category="health" text={this.state.searchQuery}/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}key="science" category="science" text={this.state.searchQuery}/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}key="sports" category="sports" text={this.state.searchQuery}/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}key="technology"category="technology" text={this.state.searchQuery}/>}></Route>
          </Routes>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;