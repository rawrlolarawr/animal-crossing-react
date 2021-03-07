import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import DBContainer from './containers/DBContainer'
import Header from './components/Header'

const App = props => {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>ACNHDB</h1>
        <DBContainer />
      </div>
    </Router>
      
  );
}

export default App