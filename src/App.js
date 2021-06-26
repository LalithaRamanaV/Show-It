/* eslint-disable react/jsx-no-undef */
import React from "react";
import  Header from "./Header";
import  Sidebar from "./Sidebar";
import  SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";  
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
    <Switch>
    <Route path="/search/:searchTerm">

    <div className="app__page">
        <Sidebar/>
         {/*eslint-disable-next-line react/jsx-no-undef*/}
        <SearchPage/>
      </div>
     {/*<h1>No results found🔎</h1> */}
    </Route>
    <Route path="/">
      <div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
      </div>
   </Route>
   </Switch>
   </Router>
    </div>
  );
}

export default App;
