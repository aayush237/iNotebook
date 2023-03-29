import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import AlertComponent from './components/Alert';
import Login from './components/Login';
import Register from './components/Register';
import {useState} from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <AlertComponent alert={alert}/>
    <div className='container'>
      <Routes>          
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/register" element={<Register showAlert={showAlert}/>} />
      </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
