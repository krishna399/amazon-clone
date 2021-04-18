import React, { useEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { authenticateService } from "./firebase.config";
import { useStateValue } from "./StateProvider";
import { UserActions } from "./reducer";

function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    //It will only load once when the app component loads ...

    authenticateService
      .onAuthStateChanged(authUser => {
        console.log("The user is  : ", authUser);
        if (authUser) {
          // The user has logged in just now
          dispatch({
            type: UserActions.SET_USER,
            user: authUser,
          });
        } else {
          // User has logged out
          dispatch({
            type: UserActions.SET_USER,
            user: null,
          });
        }
      });
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            {/* HOME */}
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
