import { Link } from "react-router-dom";
import './css/App.css';
import MainNav from './components/MainNav';
import DecorationBar from './components/DecorationBar';
import Main from './components/Main'


function App() {
  return (
    <div className="App">
      <MainNav />
      <DecorationBar />
      <Main />
    </div>
    
  );
}

export default App;
