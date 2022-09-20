import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buscador from '../components/Buscador';
import { Comprar } from '../components/Comprar';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import SigUp from '../components/SigUp';
import CartPage from '../containers/CartPage';
import ListMealsMainPage from '../containers/ListMealsMainPage';
import Animacion from '../components/Animacion.jsx';
import StripeComponent from '../stripe/StripeComponent';

const Routes = () => {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

 /*  useEffect(() => {
    window.onload = function () {
      var contenerdor = document.getElementsByClassName('animacion');
      contenerdor.style.visibility = 'hidden';
      contenerdor.style.opacity = '0';
      setloading(false);
    };
  }, []); */

  return (
    <div>
      <Router>
        <Switch>
          {loading ? (
            <Animacion className='animacion' />
          ) : (
            <Route exact path="/">
              <Navbar />
              <Buscador />
              <ListMealsMainPage />
            </Route>
          )}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SigUp} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/shop/:id" component={Comprar} />
          <Route exact path="/payment/:total" component={StripeComponent}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
