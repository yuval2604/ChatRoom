import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import {Chat} from "./components/Chat/Chat";

const App = () => (
  <Router>
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/Chat' exact component={Chat} />
  </Router>
)

export default App;
