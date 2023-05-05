import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch> 
              <Route path="/">
                <Home />
             </Route>
             </Switch>
            {/* <Home /> */}
          </div>
      </div>
    </Router>
  );
}

export default App;