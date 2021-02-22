import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import FishContainer from './containers/FishContainer'

function App() {
  return (
    <Router>
        <div className="App">
          <h1>Splash</h1>
          <Link to='/fish'>Fish</Link>
          <Route exact path='/fish'>
            <FishContainer />
          </Route>
        </div>
    </Router>
  );
}

export default App;
