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

import './App.css';

function App() {
  const handleEvent = event => {
    event.preventDefault()
    alert("You are not registered.")
  }

  return (
    <div className="App">
        <p>
          <h1>Welcome</h1>
          <form>
            <fieldset>
              <label>                
                <p>Name</p>  
                <input name="Name" />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </p>
      
      
    </div>
  );
}

export default App;
