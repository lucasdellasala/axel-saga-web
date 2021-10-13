import igLogo from './assets/ig.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Axel Saga</h1>
        <p> Site under construction </p>
        <p> 👷🔨🔧🧱 </p>
        <a href="https://www.instagram.com/axelartsaga/" target="_blank">
          <img src={igLogo} alt="ig-logo" className="igLogo"/>
        </a>
      </header>
    </div>
  );
}

export default App;
