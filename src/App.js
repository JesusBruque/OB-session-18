import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import HomePage from './views/HomePage.jsx';
import NotFoundPage from './views/NotFoundPage.jsx';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={ <HomePage /> }/>
      <Route element={ <NotFoundPage /> }/>
    </Routes>

   </Router>
  )
}

export default App;
