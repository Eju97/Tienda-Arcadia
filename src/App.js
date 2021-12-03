import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./componentes/Navbar/Navbar";
import Main from "./componentes/Main/Main";
import Footer from './componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import DetailPage from './componentes/Main/DetailPage';
import CartContextProvider from './context/cartContext';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
  <CartContextProvider>
        <Router>

          <Navbar/>

          <Switch>

            <Route exact path="/productos">
              <ItemListContainer/>        
            </Route>

            <Route exact path="/productos/:nombre">
              <DetailPage/>
            </Route>

            <Route exact path="/cart">
              <Cart/>
            </Route>

            <Route path="/">
                <Main/>
              </Route>

          </Switch>
          <Footer/>
          
        </Router>
    </CartContextProvider>
  );
}

export default App;
