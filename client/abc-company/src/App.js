import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home"
import Signin from "./components/signin"
import Signup from "./components/signup"


function App() {
  return (
   
      <Router className="container">
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </div>
      </Router>
      

      
   
  );
}

export default App;
