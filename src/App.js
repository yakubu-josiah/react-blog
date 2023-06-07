import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Library from './components/Library';
import Tools from './components/StudyTool';
import More from './components/LearnMore';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/library" component={ Library }/>
            <Route path="/tools" component={ Tools } />
            <Route path="/more" component={ More } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;