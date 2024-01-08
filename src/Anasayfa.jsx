import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import logo from './assets/logo.svg'

export default function AnaSayfa() {
    const history=useHistory();
    return (<>
        <div className='anasayfa'>
            <div className='content'>
                <img className='anasayfaImg' src={logo} alt="" />
                <p>KOD ACIKTIRIR</p>
                <p>PIZZA,DOYURUR</p>
                <button onClick={()=>history.push('/order')} className='aciktimButon'>ACIKTIM</button>
            </div>
        </div>
    </>)
}