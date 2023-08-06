import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/home';

function App() {
  
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/pricing":
      Component = Pricing
      break
    case "/about":
      Component = About
      break
  }
  
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Component/>
      </div>
    </div>
  );
}

export default App;
