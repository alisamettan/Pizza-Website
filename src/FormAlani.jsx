import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './FormAlani.css'

export default function FormAlani(props) {
    const { toplam, setToplam, ek, setEk } = props

    const history = useHistory();

    const [form, setForm] = useState({});
    //const [ek, setEk] = useState(0);
    const [adet, setAdet] = useState(1);
    //const [toplam,setToplam]=useState(0)
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(true)
    const [selectedCheckboxes, setSelectedCheckboxes] = useState(0);

    useEffect(() => {


        if (form.boyut && form.kalinlik) {
            setIsValid(true)
        }
        else {
            setIsValid(false)
        }
        const checkedCheckboxes = document.querySelectorAll('.checkbox:checked').length;
        setSelectedCheckboxes(checkedCheckboxes);

        const resetButton = document.querySelector('.resetButton');
        const handleResetClick = (event) => {
            event.preventDefault();
            document.querySelectorAll('.checkbox').forEach(cb => {
                cb.disabled = false
                cb.checked = false
                setEk(0)
            });
            setSelectedCheckboxes(0)
            setForm({});
        };
        resetButton.addEventListener('click', handleResetClick)


    }, [form])
    const disableCheckboxes = selectedCheckboxes >= 10;

    const handleChange = (event) => {
        let { value, name, type, checked } = event.target;
        value = type == 'checkbox' ? checked : value;
        setForm({ ...form, [name]: value })

        if (name == 'pepperoni' || name == 'sosis' || name == 'jambon' || name == 'izgara' || name == 'sogan' || name == 'domates' || name == 'misir'
            || name == 'sucuk' || name == 'biber' || name == 'ananas' || name == 'kabak' || name == 'jalepeno') {
            if (value === true) {
                setEk(ek + 5)
            } else {
                setEk(ek - 5)
            }
        }



        if (name == 'boyut') {
            if (value === true) {
                setErrors({ ...errors, [name]: false })
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }
        if (name == 'kalinlik') {
            if (value === true) {
                setErrors({ ...errors, [name]: false })
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }

    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('https://reqres.in/api/users', form).then(response => {
            const data = response.data
            console.log(data)
            history.push('/success')
        })
    }

    function handleClickSum(event) {
        event.preventDefault()
        setToplam(toplam + 85.50)
        setAdet(adet + 1)
    }
    function handleClickMin(event) {
        event.preventDefault()
        if (toplam > 1) {
            setToplam(toplam - 85.50)
            setAdet(adet - 1)
        } else {
            setToplam(toplam)
        }
    }

    return (<form onSubmit={handleSubmit}>
        <div className="boyutHamur">
            <div>
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Boyut Seç <span>*</span></p>
                <div className="boyut">
                    <label ><input onChange={handleChange} data-cy='name' type="radio" id="'kücük" name="boyut" value='kücük' checked={form.boyut == 'kücük' ? true : false} />
                        Küçük</label>
                    <label><input onChange={handleChange} type="radio" id="'orta" name="boyut" value='orta' checked={form.boyut == 'orta' ? true : false} />
                        Orta</label>
                    <label><input onChange={handleChange} type="radio" id="'büyük" name="boyut" value='büyük' checked={form.boyut == 'büyük' ? true : false} />
                        Büyük</label>
                    {!errors.boyut && <p style={{ color: 'red', marginTop: '0', fontSize: '12px' }}>Lütfen bir boyut seçiniz!</p>}
                </div>
            </div>
            <div>
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Hamur Seç <span>*</span></p>
                <select onChange={handleChange} value={form.kalinlik} id="kalinlik" name="kalinlik" >
                    <option >Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="orta">Orta</option>
                    <option value="kalin">Kalın</option>
                </select>
                {!errors.kalinlik && <p style={{ color: 'red', marginTop: '0', fontSize: '12px' }}>Lütfen bir kalınlık seçiniz!</p>}
            </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Ek Malzemeler</p>
            <p style={{ fontSize: '14px' }}>En Fazla 10 malzeme seçebilirsiniz.5₺</p>
            <div className="ekmalzemeler">
                <div >
                    <div className="birinci" >
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.pepperoni} type="checkbox" name="pepperoni" id="pepperoni" />
                            Pepperoni</label>
                        <label> <input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.sosis} type="checkbox" name="sosis" id="sosis" />
                            Sosis</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.jambon} type="checkbox" name="jambon" id="jambon" />
                            Kanada Jambonu</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.izgara} type="checkbox" name="izgara" id="izgara" />
                            Tavuk Izgara</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.sogan} type="checkbox" name="sogan" id="sogan" />
                            Soğan</label>
                    </div>
                </div>
                <div>
                    <div className="birinci" >
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.domates} type="checkbox" name="domates" id="domates" />
                            Domates</label>
                        <label> <input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.misir} type="checkbox" name="misir" id="misir" />
                            Mısır</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.sucuk} type="checkbox" name="sucuk" id="sucuk" />
                            Sucuk</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.jalepeno} type="checkbox" name="jalepeno" id="jalepeno" />
                            Jalepeno</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.biber} type="checkbox" name="biber" id="biber" />
                            Biber</label>

                    </div>
                </div>
                <div>
                    <div className="birinci" >

                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.ananas} type="checkbox" name="ananas" id="ananas" />
                            Ananas</label>
                        <label><input onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.kabak} type="checkbox" name="kabak" id="kabak" />
                            Kabak</label>
                    </div>
                </div>
            </div>
            <button className="resetButton">Reset</button>
        </div>

        <div className="alttaraf" style={{ marginTop: '5rem' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Sipariş Notu</p>
            <div className="birinci">
                <label><input onChange={handleChange} value={form.not} type="text" name="not" placeholder="Siparişine eklemek istediğin bir not var mı? " /></label>
            </div>
            <div className="siparis">
                <div className="buton">
                    <button onClick={handleClickMin} >-</button><span>{adet}</span><button onClick={handleClickSum}>+</button>
                </div>
                <div className="ozet">
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Sipariş Toplamı</p>
                    <div className="siparisToplam">
                        <p>Seçimler</p>
                        <p>{ek}₺</p>
                    </div>
                    <div className="siparisToplam" style={{ color: 'red' }}>
                        <p>Toplam</p>
                        <p>{85.50 + ek + toplam}₺</p>
                    </div>
                </div>
                <button data-cy='nav-success' type="submit" disabled={!isValid} style={{ marginTop: '0px', borderRadius: '0px' }} className="siparisver">Sipariş ver</button>
            </div>
        </div>
    </form>)
}