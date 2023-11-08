import './App.css';
import CcFront from './components/CcFront';
import CcBack from './components/CcBack';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const initialValue = { hname: "", atmnumber: "", atmmonth: "", atmyear: "", cvv: "" }
  const [formValue, setFormvalue] = useState(initialValue);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormvalue({ ...formValue, [name]: value });
    console.log("ans:", { ...formValue, [name]: value });
  }

  return (
    <div className="App">
      <div className='Group-10' style={{
        width: "30.1875rem",
        height: "56.25rem",
        position: "relative",
        background: "#21092F",
        overflow: "hidden"
      }}>
        <div className='2' style={{
          width: "15.5rem",
          height: "41.0625rem",
          transform: "rotate(45deg)",
          borderRadius: "41.0625rem",
          opacity: "0.8474",
          background: "#D53AFF",
          filter: "blur(67.95704650878906px)",
          transformOrigin: "0 0",
          top: "-10.2rem",
          left: "20rem",
          position: "absolute"
        }}></div>
        <div className='4' style={{
          width: "15.5rem",
          height: "41.0625rem",
          transform: "rotate(45deg)",
          borderRadius: "41.0625rem",
          opacity: "0.8474",
          background: "#FF834A",
          filter: "blur(67.95704650878906px)",
          transformOrigin: "0 0",
          top: "-7.25rem",
          left: "29rem",
          position: "absolute"
        }}></div>
        <div className='3' style={{
          width: "15.5rem",
          height: "41.0625rem",
          transform: "rotate(45deg)",
          borderRadius: "41.0625rem",
          opacity: "0.8474",
          background: "#47A2FF",
          filter: "blur(67.95704650878906px)",
          transformOrigin: "0 0",
          top: "7.5rem",
          left: "15.2rem",
          position: "absolute"
        }}></div>
      </div>

      <div style={{
        left: "10.25rem",
        top: "11.69rem",
        position: "absolute"
      }}> <CcFront formValue={formValue} />  </div>

      <div style={{
        top: "29rem",
        left: "16rem",
        position: "absolute"
      }}> <CcBack formValue={formValue} /> </div>

      <div style={{
        top: "17rem",
        left: "52rem",
        position: "absolute"
      }}> <Form
          formValue={formValue}
          handleChange={handleChange}
        /> </div>

    </div >
  );
}
export default App;
