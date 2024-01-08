import FormAlani from './FormAlani'
import logo from './assets/logo.svg'
import './OrderPizza.css'

export default function OrderPizza(props) {
    const {toplam,setToplam,ek,setEk}=props
    return (<>
        <div>
            <header>
                <img src={logo} alt="" />
                <div className='linkler'>
                    <a href="">Anasayfa - </a>
                    <a href=''> Seçenekler - </a>
                    <a style={{ fontWeight: '700', fontSize: '18px' }} href=""> Sipariş Oluştur</a>
                </div>
            </header>
            <div className='icerikler'>
                <section className='anaSection'>
                    <h1 style={{ fontWeight: 'bold' }}>Position Absolute Pizza</h1>
                    <div className='aciklama'>
                        <div className='fiyat'>
                            <h1>85.50₺</h1>
                            <p className='gri'>4.9</p>
                            <p className='gri'>(200)</p>
                        </div>
                        <p className='gri'>Frontent Dev olarak hala position:absolute kullaniyorsan bu cok aci pizza tam sana göre. Pizza, domates, peynir ve genellikle çesitli diger malzemelerle kaplanmis, daha sonra geleneksel olarak odun atesinde bir fininda yüksek sicaklikta pisirilen,
                            genellikle yuvarlak, düzlestirilmis mayalr bugday bazli hamurdan olusan italyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
                    </div>
                    <div>
                        <FormAlani toplam={toplam} setToplam={setToplam} ek={ek} setEk={setEk}/>
                    </div>
                </section>
            </div>
        </div>
    </>)
}