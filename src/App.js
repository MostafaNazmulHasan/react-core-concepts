import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])
  const nayoks = ['Shakib', 'Anamul', 'Dipjol']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name=" Mostafa"></Nayok>
      <Nayok name=" Hasan"></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My Heading</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0);
  
  const handClick =()=> setCount(count+1);
  return (
    <div>
      <button onClick={handClick}>Add Movie</button>
      <h5>Number of movies: {count} </h5>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count * 2}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return (
    <diV>
      <p>Movies i have acted: {props.movies} </p>
    </diV>
  )
}
function Nayok(props){
  console.log(props.name)
  const nayokStyle ={
    border: '2px solid red',
    margin: '20px'
  }
  return (
  <div style={nayokStyle}> 
    <h1>Mostafa Nazmul Hasan{props.name}</h1>
  </div>
  )

}

export default App;
