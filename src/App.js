import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Upload from './Pages/Upload'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'
import Header from './Components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="page">
          <Header/>
          <Switch>
            <Route path='/upload' component={Upload}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/' component={Home}/>
          </Switch>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
