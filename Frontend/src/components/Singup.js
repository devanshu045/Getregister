import React ,{useState}from 'react'
import axios from "axios";
import './Singup.css';

const Singup = () => {
    const [intval,setintval] = useState({
        name: "",
        password: "",
      });
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setintval({...intval,[name]:value});
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/login',intval).then((response) => {
            console.log(response.data); // Handle the response from the backend here
          })
          .catch((error) => {
            console.error(error); // Handle any errors that occur during the request
          });
    }
    
  return (
    <div className="signup-container">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter your Name</label>
        <input className="input-field" name="name" value={intval.name} type="text" onChange={handleChange} />
        <input className="input-field" name="password" value={intval.password} type="password" onChange={handleChange} />
        <label htmlFor="">Re-enter your password</label>
        <button type="submit" className="submit-button">Signup</button>
      </form>
    </div>
  )
}

export default Singup