//import React from "react";
//import logo from './logo.svg';
import './App.css';
//import App from './Components/App';
import Header from './components/header';
import {ThemeProvider} from "@material-ui/styles";
import {Router, Route ,Switch} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import theme from "./components/theme";
//import {Link} from "react-router-dom"


function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>     
     <Switch>
       <Route excat path="/" component={()=> <div>Home</div>}/>
       <Route excat path="/services" component={()=> <div>Services</div>}/>
       <Route excat path="/about" component={()=> <div>About Us</div>}/>
       <Route excat path="/contact" component={()=> <div>Contact Us</div>}/>
       <Route excat path="/signup" component={()=> <div>Sign Up</div>}/>
     </Switch>
      hello!
     </BrowserRouter>
    
     </ThemeProvider>
  );
}

export default App;
