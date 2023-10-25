
import './App.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home  from './Home.jsx';
import Login from './Login';
import ResumeView from './Resume.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Resume" element={<ResumeView/>} />
      </Routes>   
    </Router>
  );
}

export default App;
