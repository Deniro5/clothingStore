import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './Home';
import '../scss/app.scss';
import Product from './productDescription';
import Shop from './shop';
import Header from './Header';
import Footer from './Footer';
import {CartProvider} from './CartContext'

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <CartProvider>
        <div className="app-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/product/:id" component={Product}/> 
            <Route exact path="/shop/:section" component={Shop} />
          </Switch>
          <Footer />
        </div>
        </CartProvider>
      </Router>
    );
  }
}

export default App;
