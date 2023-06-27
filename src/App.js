import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Library from './pages/Library';
import Tools from './pages/StudyTool';
import More from './pages/LearnMore';
import BibleView from './components/BibleVerses'

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
            <Route path="/bible/read-bible-chapter/:id" component={ BibleView } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;