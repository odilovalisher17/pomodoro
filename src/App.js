import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FullHomepage from './Components/FullHomepage/FullHomepage';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
  return( 
  <Router>
    <Routes>
      <Route exact path='/' element={<FullHomepage />} />
      <Route exact path='/app' element={<Homepage />} />
    </Routes>
  </Router>
  )
};

export default App;
