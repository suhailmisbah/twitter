import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import SideNav from './components/sideNav';
import MainBody from './components/mainBody';
import Trending from './components/trending';
import TrendingPage from './components/trendingPage';


import Grid from '@material-ui/core/Grid';
import './App.css';


function App() {

  return (
    <Router>
      <div className="App">

      <Grid container>
          {/* Side Navigation */}
        <Grid  item xs={3}  className="sideNav__Style">
          <SideNav />
        </Grid>

        {/* Middle */}
        <Grid  item xs={6} className="mainBody">
          
          {/* views / add tweets */}
          <Route path="/" exact component={MainBody} />

          {/* view trending topics */}
          <Route path="/explore" exact component={TrendingPage} />
        </Grid>

        {/* Trending */}
        <Grid  item xs={3} className="mainTrending">
          <Trending />
        </Grid>

      </Grid>
      
      </div>
    </Router>
  );
}

export default App;
