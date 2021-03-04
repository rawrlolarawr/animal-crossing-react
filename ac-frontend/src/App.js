import './App.css';
import DBContainer from './containers/DBContainer'

const App = props => {
  return (
      <div className="App">
        <h1>ACNHDB</h1>
        <DBContainer />
      </div>
  );
}

export default App