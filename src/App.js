import Navbar from './components/Navbar';
import './App.css';
import Formcontrol from './components/Formcontrol';
import './Navbar.css'
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";


function App() {
  //ALERT SETTER
  const [alert, setAlert] = useState(null);    //set alert is used to 
  const showAlert = (message, type) => {    //show alert shows msgs, type refers to bootstrap success , danger etc..
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {   // code to remove the alert after a specified time, here3secs..
      setAlert(null);
    }, 2000);
  }

  //mode setter DARK or LIGHT
  const [mode, setMode] = useState('dark'); //default- light mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode has been enabled", "success");
      //document.title = 'dark-mode'; --to dynamically change the title of the app
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} day="" />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="About" element={<About />} >
            </Route>
            <Route path="/" element={<Formcontrol showAlert={showAlert} mode={mode} toggleMode={toggleMode} />} >
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
