import logo from './logo.svg';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Upload from './Pages/Upload'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/upload' component={Upload}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Home}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
