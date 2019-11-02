import React from 'react';
import Header from './components/header/Header.js';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/footer.js';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './NotFound.js';
import DummyPage from './DummyPage';
import Registrasjonogvisning from './components/registrasjonogvisning/Registrasjonogvisning.js';
import Signupogvisning from './components/signupogvisning/Signupogvisning.js';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Header/>
          <Navbar/>
            <div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/DummyPage" exact component={DummyPage} />
                <Route path="/registrasjonogvisning" exact component={Registrasjonogvisning} />
                <Route path="/signupogvisning" exact component={Signupogvisning} />
                <Route component={Notfound} />
              </Switch>
            </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
