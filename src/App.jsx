import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from "./pages/index";
import './styles/Styles.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
