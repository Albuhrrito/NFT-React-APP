import './App.css';
import { ethers } from "ethers";
import { useState, useEffect } from 'react';
import { GiCat } from "react-icons/gi";

function App() {
  const [account, setAccount] = useState("");

  const initConnection = async () => {
    if(typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } else {
      console.log("Please install metamsk.");
    }
  }

  useEffect(() => {
    initConnection();
  }, []);

  return (
    <div className='page'>
      <div className='header'>
      <svg className="logo" width="70" height="60" viewBox="0 0 266 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 155L90 9L163.5 129L176 103L122.5 9H150L192 77L234.5 9H258L176 155H150L90 58L51.5 129H105L115.5 155H8Z" fill="white" stroke="white" stroke-width="9"/>
        </svg> 
        <p>LETS FUCKING GOOO 
          <span> 
            <GiCat style={{ marginLeft: "5px" }} />
          </span>
        </p>
        {account === "" ? (
      <button className='button' onClick={initConnection}>Connect
      </button>
      ) : (
      <p>...{account.substring(account.length-6)}</p>
      )} 
      </div>
      
    </div>
  );
}

export default App;
