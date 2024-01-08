import logo from './assets/logo.svg'
import './successPage.css'

export default function SuccessPage(props) {
    const {ek,toplam}=props
    return (<>
        <div className="successpage">
            <div className='main'>
                <img className='successImg' src={logo} alt="" />
                <div>
                    <p>TEBRIKLER!</p>
                    <p>SİPARİŞİNİZ ALINDI!</p>
                </div>
                <div className='siparisozet'>
                    <h2>Sipariş Toplamı</h2>
                    <div>
                        <p>Seçimler</p>
                        <p>{ek}₺</p>
                    </div>
                    <div>
                        <p>Toplam</p>
                        <p>{85.5+toplam+ek}₺</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}