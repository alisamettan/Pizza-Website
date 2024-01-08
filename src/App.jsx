import { useState } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AnaSayfa from './Anasayfa'
import OrderPizza from './OrderPizza'

function App() {
  

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <AnaSayfa/>
        </Route>
        <Route path='/order' exact>
          <OrderPizza/>
        </Route>
    </Switch>
  </>)
}

export default App;
