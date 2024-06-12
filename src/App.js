import Nav from './components/Nav.js'
import './App.css';
import Home from './components/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
     </BrowserRouter>
     <BrowserRouter>
      <Home />
     </BrowserRouter>
    </div>
  );
}

export default App;
