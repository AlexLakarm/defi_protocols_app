import './Protocols.css'
import {Link } from 'react-router-dom';


const Protocol = ({name, logo, symbol, id}) => {


    return (
        <div className='protocol'>
            <h2>{name} ({symbol})</h2>
            
            <Link to={`/${id}`}><img src = {logo}></img></Link>
        </div>

    )
}


export default Protocol;