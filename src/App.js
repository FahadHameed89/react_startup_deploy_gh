import logo from './logo.svg';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

function App() {
  const classes = useStyles();

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
        <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />

        Navigate
      </Fab>
      </header>
    </div>
  );
}

export default App;
