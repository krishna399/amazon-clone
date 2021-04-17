import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <h1>Hey you landed on login</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            {/* HOME */}
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
