import logo from './assets/logo.svg'

export default function SuccessPage() {
    return (<>
        <div className="successpage">
            <div className='main'>
                <img className='successImg' src={logo} alt="" />
                <div>
                    <p>TEBRIKLER!</p>
                    <p>SİPARİŞİNİZ ALINDI!</p>
                </div>
            </div>
        </div>
    </>)
}