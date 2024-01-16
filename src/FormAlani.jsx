import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './FormAlani.css'

export default function FormAlani(props) {
    const { toplam, setToplam, ek, setEk } = props
    const history = useHistory();
    
    const initialForm={
        selectedItems: [], 
        boyut:'',
        kalinlik: '',
        not: ''
      }
    
    const [form, setForm] = useState(initialForm);
    const [adet, setAdet] = useState(1);
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(true)
    const[disableCheckboxes,setDisableCheckboxes]=useState(false)    
    
    const ekmalzemeler = ['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Biber', 'Ananas', 'Kabak']

    useEffect(() => {


        if (form.boyut && form.kalinlik) {
            setIsValid(true)
        }
        else {
            setIsValid(false)
        }
        
        const checkedCheckboxes = form.selectedItems.length;
        setDisableCheckboxes(checkedCheckboxes >= 10);
  
        document.querySelector('.resetButton').addEventListener('click',(event)=>{
            event.preventDefault()
            setDisableCheckboxes(false)
            
        })

    }, [form])
   

    
  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;

    if (type === 'checkbox') {
      
      let updatedItems=[];
      if (checked) {
        updatedItems = [...form.selectedItems, name];
        setEk(ek+5)
      } else {
        updatedItems = form.selectedItems.filter(item => item !== name);
        setEk(ek-5)
      }

      setForm({...form,
        selectedItems: updatedItems
    });
    } else {
      
      setForm({...form,
        [name]: value
    });
    }

    if (name === 'boyut' || name === 'kalinlik') {
      if (value === true) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

  };

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('https://reqres.in/api/users', form).then(response => {
            const data = response.data
            console.log(data)
            setForm({})
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', width: '100%',marginTop:'2rem' }} className="  grid grid-rows-4 grid-flow-col gap-4">
                {ekmalzemeler.map(
                    (item, index) => {
                       return <label style={{width:'40%'}} ><input key={index} onChange={handleChange} className="checkbox" disabled={disableCheckboxes} checked={form.item} type="checkbox" name={item} />
                            {item}</label>
                    })
                }
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