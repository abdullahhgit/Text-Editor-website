
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeClasses = () => {
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
  }

  const toggleMode = (cls) => {
    removeClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.backgroundColor = "dark"
      showAlert("Dark mode has been enabled", "success");
    }

    else {
      setMode('light');
      document.body.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Mobitext" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter Text below" mode={mode} />
        {
          // <About /> 
        }
      </div>
    </>
  );
}

export default App;
