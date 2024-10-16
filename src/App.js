import './App.css';
import Navbar from './Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed 'Switch'

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  // alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';  // Dark mode color
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';  // Light mode color
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
     {/* <Router>*/}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          
          
          {/* 
          if we do not use exect with Path
          /user -->Component 1 --compier will render componet 1 and if we click on user/home it will show result of user/home 
          /user/home -->Component 2 
          
          
          if we  use exect with Path
          /user -->Component 1 --compier will render componet 1 and if we click on user it will show the result of user 
          /user/home -->Component 2     --compier will render componet 2 and if we click on user/home it will show the result of user/home

          */}
         
         
         
         {/* <Routes> */}      {/* Correctly using Routes */}
            {/*<Route exect path="/about" element={<About />} /> */}
           {/* <Route exect path="/" element={ } /> */}
              <TextForm showAlert={showAlert} heading="Enter the text here to analyze it below" mode={mode} />
          {/*</Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;

