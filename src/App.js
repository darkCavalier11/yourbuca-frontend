import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
