import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import Home from "./components/home";
import Signin from "./components/signin"
import Signup from "./components/signup";
import ComplaintCustomer from "./components/complaintCustomer";
import addComplaint from "./components/addComplaint";


function App() {
  return (
   
      <Router className="container">
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        {/* <Route path='/allcomplaintCustomer' component={ComplaintCustomer} /> */}
        <ProtectedRoute
          path="/allcomplaintCustomer"
          component={ComplaintCustomer}
          isAuth={localStorage.length > 0 && localStorage.role === "customer"}
        />
        <ProtectedRoute
          path="/addcomplaint"
          component={addComplaint}
          isAuth={localStorage.length > 0 && localStorage.role === "customer"}
        />
      </div>
      </Router>
      

      
   
  );
}

export default App;
