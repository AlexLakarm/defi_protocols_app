import './App.css';
import axios from 'axios';
import {useState} from "react";
import {useEffect} from "react";
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import ProtocolPage from './Pages/ProtocolPage';
import { Route, Routes } from "react-router-dom";

function App() {

const [protocols, setProtocols] = useState([]);
const [blockchains, setBlockchains] = useState([]);
const [filter, setFilter] = useState("All");

console.log(protocols);


useEffect(()=>{
  const getProtocols = async () => {

    const url = 'https://api.llama.fi/protocols'; 
    const {data} = await axios(url)
  
    setProtocols(data);

    const uniqBlockchains = [];

    data.forEach(protocol => {
      protocol.chains.forEach(chain => {
        uniqBlockchains.includes(chain) || uniqBlockchains.push(chain)
      });
    });

    setBlockchains(uniqBlockchains);

    
  }

  getProtocols();
}, [])

console.log(blockchains);

const blockchainClick = (e)=> {
  setFilter(e.target.textContent);
  console.log(e.target.textContent);

}




  return (
    <div className="App">
      <Header/>
      <Routes>
          
            <Route path="/" element={<HomePage blockchainClick = {blockchainClick} protocols={protocols} filter = {filter}/>} />
            <Route path="/:id" element={<ProtocolPage protocols={protocols}/>} />
          
      </Routes>   
    </div>
  );
}

export default App;
