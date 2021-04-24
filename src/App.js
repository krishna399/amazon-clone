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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

// payment public api key from stripe dashboard site
const PAYMENT_PROMISE = loadStripe(
  `pk_test_51IheLISAZBhSouuZt9gS62aO3oGjtKX64aDX5Sn47T
  FosLoHx65m3FIGv4VoYfPP4e6gkTd3YBiz06pg7F0COQSJ00UXjGKpCW`
);

function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    /*
     * It will only load once when the app component loads ...
     * or when values provided in the follow up array changes
    */

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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={PAYMENT_PROMISE}>
              <Payment />
            </Elements>
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
