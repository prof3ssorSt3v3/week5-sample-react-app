import './App.css';
import Navbar from '../Navbar/Navbar';
//next 4 go inside the <main>
import Home from '../Home/Home';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../../steve.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/404">
            <Not />
          </Route>
          <Route
            path="/"
            exact
            render={(props) => {
              //do stuff
              return (
                <div className="home" style={{ padding: '1rem' }}>
                  <p>This is the home-ish page</p>
                  <Home manually={props} isAlive={true} anything={1} />
                </div>
              );
            }}
          />
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
} /**
<Route path="/" exact>
  <Home mycustomprop="asdf" />
</Route> 
<Route path="/" exact component={Home} />

 */

export default App;
