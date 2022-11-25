import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {
  const [data, setData] = useState([{volumeInfo:{title:'test'}, id:1}]);
  const [dataFromUser, setDataFromUser] = useState('test');

  async function getData() {
   fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataFromUser}`).then(res => res.json())
    .then((dataFromGoogle) => {
      console.log(dataFromGoogle.items[0].volumeInfo.title);
      setData(dataFromGoogle.items);
      // console.log(dataAsObject);
    })

  }
  useEffect(() => {
    getData()

  }, []);


  function getvalue() {
    getData()
  }
  
  function handleChange(event) {
    setDataFromUser(event.target.value)
    
    
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.map((item)=><div>{item.volumeInfo.title}</div>)}
        </p>
        <div className="topnav">
          <input type="text" onChange={handleChange} placeholder="Search.." />
          <button onClick={getvalue}>
            search
          </button>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
    </div>
  );
}
export default App;
