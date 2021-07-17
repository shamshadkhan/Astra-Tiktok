import logo from './logo.svg';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Upload from './Pages/Upload'
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
            <Route path='/' component={Home}/>
          </Switch>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
