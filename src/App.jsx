
import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AnaSayfa from './Anasayfa'
import OrderPizza from './OrderPizza'
import SuccessPage from './SuccessPage'
import {useState} from 'react'

function App() {
  const [toplam,setToplam]=useState(0)
  const [ek,setEk]=useState(0);

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <AnaSayfa/>
        </Route>
        <Route path='/order' exact>
          <OrderPizza toplam={toplam} setToplam={setToplam} ek={ek} setEk={setEk}/>
        </Route>
        <Route path='/success' exact>
          <SuccessPage ek={ek} toplam={toplam} />
        </Route>
    </Switch>
  </>)
}

export default App;
