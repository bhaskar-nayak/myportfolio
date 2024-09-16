
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/home';
import NavbarComponet from './Navbar';
import FooterComponent from './Footer/footer';
import Register from './Register';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <NavbarComponet/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
