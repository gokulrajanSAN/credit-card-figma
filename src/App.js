import './App.css';
import CcFront from './components/CcFront';
import CcBack from './components/CcBack';
import Form from './components/Form';
// import Thank from './components/Thank';
import { useState } from 'react';

function App() {

  const initialValue = { hname: "", atmnumber: "", atmmonth: "", atmyear: "", cvv: "" }
  const [formValue, setFormvalue] = useState(initialValue);


  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);

    if (name === "atmnumber") {
      e.target.value = e.target.value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }
    setFormvalue({ ...formValue, [name]: value });
  }

  return (
    <div className="App">
      <div className='Group-10'>
        <div className='arc2' />
        <div className='arc4' />
        <div className='arc3' />
      </div>

      <div className='ccFront' >
        <CcFront formValue={formValue} />
      </div>

      <div className='ccBackPos'>
        <CcBack formValue={formValue} />
      </div>

      <div className='form' >
        <Form
          formValue={formValue}
          handleChange={handleChange} />
      </div>

      {/* <div style={{
        // top: "20rem",
        // left: "52rem",
        // position: "absolute"
      }}><Thank /></div> */}
    </div >
  );
}
export default App;
