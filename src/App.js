import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Make some changes to App.js and save to reload. 
        </p>
        <a
          className="App-link"
          href="http://FahadHameed89.github.io/react_startup_deploy_gh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to the Online Build
        </a>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
      </header>
    </div>
  );
}

export default App;
