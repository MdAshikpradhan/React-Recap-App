import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [sahabis, setsahabis] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => setsahabis(data))
  // }, [])
  const sahabis = [{name: 'Ali (R)', religion: 'Islam'}, {name: 'Hamza (R)', religion: 'Islam'}, {name: 'Abu Talha (R)', religion: 'Islam'}, {name: 'Abu Bakar Siddik(R)', religion: 'Islam'}, {name: 'Omar (R)', religion: 'Islam'}];
  return (
    <div className="App">
      <header className="App-header">
        <CountZikir></CountZikir>
        {
          sahabis.map(shbi => <Sahabis name={shbi.name} key={shbi.id} religion={shbi.religion}></Sahabis>)
        }
      </header>
    </div>
  );
}

function SubahanAllah(props) {
  return (
    <h2>SubahanAllah: {props.subahanAllah}</h2>
  )
}

function Alhamdulillah(props) {
  return (
    <h2>Alhamdulillah : {props.alhamdulillah} </h2>
  )
}

function CountZikir() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button style={{background: 'cyan', height: '40px', marginTop: '20px', borderRadius: '10px', border: 'none'}} onClick={() => setCount(count + 1)}>Clicked for Call Allah</button>
      <SubahanAllah subahanAllah={count}></SubahanAllah>
      <Alhamdulillah alhamdulillah={count}></Alhamdulillah>
      <h2>Allahu Akbar: {count + 1}</h2>
    </div>
  )
}


function Sahabis(props){
  const sahabiStyle={
    backgroundColor: 'lightSalmon',
    border: '2px solid lightBlue',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    width: '500px'
  }
  return (
    <div style={sahabiStyle}>
      <h1>{props.name}</h1>
      <h3>{props.religion}</h3>
      <p>I Am A Servant Of Allah</p>
    </div>
  )
}

export default App;
