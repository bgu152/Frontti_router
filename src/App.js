import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
  Link
  }from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Welcome to the React Router
      </header>

      <BrowserRouter>
          <Link to="/">Home</Link> {' '}
          <Link to="/about">About</Link> {' '}
          <Link to="/contact">Contact</Link> {' '}
          <Routes>
            <Route exact path ="/" element ={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route  path ="/contact" element ={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
