import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import ListAllData from './Components/ListAllData'
import ListSomeOtherData from './Components/ListSomeOtherData'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Route exact path="/" component={ListAllData}/>
      <Route exact path="/test" component={ListSomeOtherData}/>
    </Router>
    </div>
  );
}

export default App;
