import Shop from "./Pages/Shop/Shop";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route ecaxt path="/shop" component ={Shop} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
