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
          Welcome to React Router
      </header>

      <BrowserRouter>
          <Link to="/">Home</Link> {' '}
          <Link to="/about">About</Link> {' '}
          <Link to="/contact">Contact</Link> {' '}
          <Link to="/links">Links</Link> {' '}
          <Routes>
            <Route exact path ="/" component ={<Home/>}/>
            <Route  path ="/about" component ={<About/>}/>
            <Route  path ="/contact" component ={<Contact/>}/>
            <Route  path ="/links" render ={()=> <h1>Page not found</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
