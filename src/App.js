import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Nav2 from './component/Nav2';
import TurnOnIdea from './component/TurnOnIdea';
import Sidenav from './Sidenav';
import MiniDrawer from './Sidenav';


function App() {
  return (
    <div class=" container-fluid">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />*/}
        {/*<NavBar/>*/}
        {/*<Nav2/>*/}
        {/*<TurnOnIdea/>*/}
        <MiniDrawer/>

        
      
      </header>
    </div>
  );
}

export default App;
