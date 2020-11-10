import { Link } from 'react-router-dom';

const Screen61 = () => {
    return (  

        <div className='veteranPage page'>
            <h1>Открытие, переоформление льгот</h1>
            <h3>Выберите лицо, на которое необходимо оформить льготу. <br/> Если льгота оформляется на владельца лицевого счёта,  <br/> выберите "Оформить на абонента",  <br/> в ином случае - "Оформить на другое лицо".</h3>
         
            <Link to='/5.1' className='btnWhole'><p className='btnText'>Оформить на абонента</p></Link>
            <Link to='/' className='btnWhole'><p className='btnText'>Оформить на другое лицо</p></Link>
        </div>
    );
}
 
export default Screen61;