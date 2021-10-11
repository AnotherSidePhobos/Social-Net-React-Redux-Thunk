import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogsContainer from './components/Messages/DialogsContainer';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';

function App(props) {
  debugger
  return (

      <div className="App">
          <NavbarContainer/>
          <div className='container'>
              <Switch>

              <Route path="/dialogs" component={DialogsContainer} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/music" component={Music} />
              <Route path="/profile/:userId?" component={ProfileContainer} />
              <Route path='/' exact component={ProfileContainer}/>


              <Route path="/login" component={Login} />
              </Switch>
          </div>

      </div>
  );
}

export default App;