
import './App.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home  from './Home.jsx';
import Login from './Login';


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Login/>} />
          {/* <Route exact path="/Login" element={</>} /> */}
      </Routes>   
    </Router>
  );
}

export default App;
