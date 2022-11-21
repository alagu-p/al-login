import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Frame} from './Asset/Frame.png'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
  <div className="App">

    <div className="Auth-form-container">
  <form className="Auth-form">
    <div className="logo"><img src={Frame} alt="logo"/></div>
      <div className="Auth-form-content">
          
          <div className="text-center mb-5">
          <h4 className="text-white"> Curate,Visualize,Activate</h4>

          </div>
          <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control transparent-input mt-1" placeholder="your email" />
          </div>
      <div className="form-outline mb-4">
      <input type="password" id="form2Example2" className="form-control transparent-input mt-1" placeholder="password" />
      </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
      <input class="form-check-input font " type="radio"  id="flexRadioDefault1"/>
  <label class="form-check-label text-white" for="flexRadioDefault1">
    Remember me</label>
      </div>
    </div>

    <div className="col">
      <a href="#!" className="">Forgot password?</a>
    </div>
  </div>
  <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                  Sign in
              </button>
          </div>
         
      </div>
  </form>
</div>
</div>
    
  
  );
}

export default App;
