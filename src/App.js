import "./App.scss";
import MainView from "./views/MainView";
import DetailView from "./views/DetailView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainView />
          </Route>
          <Route path="/users/:slug">
            <DetailView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
