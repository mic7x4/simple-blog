import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from './CreateBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/create"><CreateBlog/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
