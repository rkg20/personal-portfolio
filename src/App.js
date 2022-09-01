import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter } from "react-router-dom";
import {Switch,Route} from "react-router-dom";


const App=()=>{
  // const {id}=useParams("0");
  // console.log(id);
  return(
      
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/"><Home/></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );

}
export default App;