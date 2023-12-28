import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { Home } from './pages/Home';
import Main from './pages/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Main/>}/>
       
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
