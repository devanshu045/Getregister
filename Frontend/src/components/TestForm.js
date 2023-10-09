import axios from "axios";
import { useState } from "react";
import React from "react";
import './TestForm.css';
const TestForm = () => {
    
  // jai jai shree ram
  const [intval,setintval] = useState({
    name: "",
    lastname: "",
    age: "",
    password: "",
    repassword: "",
  });

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setintval({...intval,[name]:value});
}

const handleSubmit =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/register',intval).then((response) => {
        console.log(response.data); // Handle the response from the backend here
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occur during the request
      });
}


  return (  <div className="test-form-container">
  <form action="" onSubmit={handleSubmit}>
    <label htmlFor="">Enter your Name</label>
    <input className="input-field" name="name" value={intval.name} type="text" onChange={handleChange} />
    <label htmlFor="">Enter your LastName</label>
    <input className="input-field" name="lastname" value={intval.lastname} type="text" onChange={handleChange} />
    <label htmlFor="">Enter your age</label>
    <input className="input-field" name="age" value={intval.age} type="number" onChange={handleChange} />
    <input className="input-field" name="password" value={intval.password} type="password" onChange={handleChange} />
    <label htmlFor="">Re-enter your password</label>
    <input className="input-field" name="repassword" value={intval.repassword} type="password" onChange={handleChange} />
    <button type="submit" className="submit-button">Submit</button>
  </form>
</div>
  )
};

export default TestForm;
