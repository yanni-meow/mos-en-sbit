import { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalState, { updateGlobalState } from '../pullstate';

const Screen51 = () => {

    const lgotTypeList = GlobalState.useState(s => s.documentsList);

    const [lgotType, setLgotType] = useState('');

    function openListType(e) {
        setLgotType(e.target.name);
        updateGlobalState({lgotType: e.target.name});
    }

    function getContent() {
        
        return (
            lgotTypeList[lgotType].doclist.map((doc, index) => (<li key={index}>{doc.name}</li>))
        )
    }

    return (  

        <div className='lgotListPage page' style={{ height: lgotType && 'auto'}}>
            <h1>Открытие, переоформление льгот</h1>

            {(lgotType === '') ? <>
            <h2>Список льгот</h2>
            <div className='page' style={{height: 'max-content'}}>
                <button name='invalid' onClick={openListType} className='btnThird btnText'>Инвалидность</button>
                <button name='veteran' onClick={openListType} className='btnThird btnText'>Ветеран труда</button>
                <button name='sirota' onClick={openListType} className='btnThird btnText'>Сирота</button>
            </div>
            <div>
                <h3>Для оформления, переоформления льготы, <br/> отсутствующей в списке, необходимо связаться  <br/> с оператором контактного центра в главном меню</h3>
            </div>
            </>
            :
            <div className='page veteranPage' style={{height: 'auto'}} > 
                <h2>{lgotTypeList[lgotType].title}</h2>
                <div className='veteranBox orange-box'>
                    <h3>Для оформления льготы «{lgotTypeList[lgotType].title}» необходимо в обязательном порядке предоставить документы льготника.</h3>
                    <ul className='list'>
                        {getContent()}
                    </ul>
                    <ul className='list'>
                        <li>Для определения льготного норматива льготника, необходимо подтвердить количество проживающих, предоставив копию финансово-лицевого счёта, или иной документ, подтверждающий сведения о прописанных по адресу оформления льготы</li>
                    </ul>
                    <div className='orange-text' style={{margin:'0 auto'}}>Если Вы готовы сканировать документы, нажмите «Далее»</div>
                </div>
            <button onClick={() => setLgotType('')} className='btnHalf'><p className='btnText'>Отмена</p></button>
            <Link to='/9.1' className='btnHalf'><p className='btnText'>Далее</p></Link>
            </div>
            }
        </div>
    );
}
 
export default Screen51;