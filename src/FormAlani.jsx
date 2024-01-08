export default function FormAlani() {
    return (<form>
        <div className="boyutHamur">
            <div>
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Boyut Seç <span>*</span></p>
                <div className="boyut">
                    <label ><input type="radio" id="'kücük" name="boyut" value='kücük' />
                        Küçük</label>
                    <label><input type="radio" id="'orta" name="boyut" value='orta' />
                        Orta</label>
                    <label><input type="radio" id="'büyük" name="boyut" value='büyük' />
                        Büyük</label>
                </div>
            </div>
            <div>
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Hamur Seç <span>*</span></p>
                <select id="kalinlik" name="kalinlik" >
                    <option >Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="orta">Orta</option>
                    <option value="kalin">Kalın</option>
                </select>
            </div>
        </div>
        <div style={{marginTop:'2rem'}}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Ek Malzemeler</p>
            <p style={{ fontSize: '14px' }}>En Fazla 10 malzeme seçebilirsiniz.5₺</p>
            <div className="ekmalzemeler">
                <div >
                    <div className="birinci" >
                        <label><input type="checkbox" name="pepperoni" id="pepperoni" />
                        Pepperoni</label>
                        <label> <input type="checkbox" name="sosis" id="sosis" />
                        Sosis</label>
                        <label><input type="checkbox" name="jambon" id="jambon" />
                        Kanada Jambonu</label>
                        <label><input type="checkbox" name="izgara" id="izgara" />
                        Tavuk Izgara</label>
                        <label><input type="checkbox" name="sogan" id="sogan" />
                        Soğan</label>
                    </div>
                </div>
                <div>
                    <div className="birinci" >
                        <label><input type="checkbox" name="domates" id="domates" />
                        Domates</label>
                        <label> <input type="checkbox" name="misir" id="misir" />
                        Mısır</label>
                        <label><input type="checkbox" name="sucuk" id="sucuk" />
                        Sucuk</label>
                        <label><input type="checkbox" name="jalepeno" id="jalepeno" />
                        Jalepeno</label>
                        <label><input type="checkbox" name="sogan" id="sogan" />
                        Soğan</label>
                    </div>
                </div>
                <div>
                <div className="birinci" >
                        <label><input type="checkbox" name="biber" id="biber" />
                        Biber</label>
                        <label> <input type="checkbox" name="sucuk" id="sucuk" />
                        Sucuk</label>
                        <label><input type="checkbox" name="ananas" id="ananas" />
                        Ananas</label>
                        <label><input type="checkbox" name="kabak" id="kabak" />
                        Kabak</label>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Sipariş Notu</p>
        <label><input type="text" name="not" placeholder="Siparişine eklemek istediğin bir not var mı? " /></label>
        </div>
    </form>)
}