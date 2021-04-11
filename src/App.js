import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
         <Switch>
            <Route path="/" exact>
              <Home />
           </Route>
           <Route path="/checkout">
              <Checkout />
           </Route>
          
         </Switch>
        
      </div>
    </Router>
  );
}

export default App;
