// Coding exercise from a frontend perspective:
// Healthcare providers request to be part of the Availity system.
// Using React framework, create a registration user interface so
// healthcare providers can electronically join Availity.  The 
// following data points should be collected:
//   First and Last Name
//   NPI number
//   Business Address
//   Telephone Number
//   Email address

import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="App">
      <h1>Welcome</h1>
      {submitting &&
        <div>Submtting Form...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input name="first_name" onChange={handleChange}/>
          </label>
          <label>
            <p>Last Name</p>
            <input name="last_name" onChange={handleChange}/>
          </label>
          <label>
            <p>NPI Number</p>
            <input name="npi_number" onChange={handleChange}/>
          </label>
          <label>
            <p>Business Address</p>
            <input name="business_address" onChange={handleChange}/>
          </label>
          <label>
            <p>Telephone Number</p>
            <input name="telephone_number" onChange={handleChange}/>
          </label>
          <label>
            <p>Email Address</p>
            <input name="email_address" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
