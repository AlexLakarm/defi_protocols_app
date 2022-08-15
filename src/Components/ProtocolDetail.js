
import {Link, useParams } from 'react-router-dom';
import './Protocols.css'

const ProtocolDetail = ({protocols}) => {


    const params = useParams();
    


    const protocol= protocols.find(protocol => protocol.id===params.id);

    return (
        
        <>
            <Link to="/"><button className='btn-grad'>Back</button></Link>
            <div className='details'>
                <img className='imgdetail' src={protocol.logo}></img>
                <div className='flex-center'>
                    <h2>Protocol : {protocol.name}</h2>
                    </div>
                <div className='list'>  
                    <p>Category : {protocol.category}</p>
                    <p>Total Value Locked : {protocol.tvl}</p>
                    <p>Url : <a href={protocol.url}>{protocol.name} url</a></p>
                    <p>MCap : {protocol.mcap}</p>
                </div>  
                <p>Blockchains : </p>
                    <div className='flex blockchains'>
                    {protocol.chains.map((blockchain)=>(
                        <p>{blockchain}</p>
                    ))
                    }
                </div>
                <p>Description : {protocol.description}</p>
            </div>
        </>
    )
}


export default ProtocolDetail;