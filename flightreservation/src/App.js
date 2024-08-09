import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Footer from './Footer';
import Sample from './Sample';


function App() {
  return (
    <div className="App">
     {/* <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register"  element={<Registration/>}/>
        <Route path="/login"  element={<Login/>}/>
      </Routes>
      <Footer/>
     </Router> */}
     <Sample/>
    </div>
  );
}

export default App;
