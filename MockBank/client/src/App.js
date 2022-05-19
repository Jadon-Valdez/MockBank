import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
}
from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
//switch route
export default App;
