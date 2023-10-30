import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Breadcrumbs from "./components/Breadcrumbs.jsx";
import FormRequest from './FormViewRequest.jsx';
import FormIncidence from './FormViewIncidence.jsx';
import ResumeView from './Resume.jsx';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Home/FormRequest' element={<FormRequest />} />
        <Route path='/Home/FormRequest/Resume' element={<ResumeView />} />
        <Route path='/Home/FormIncidence' element={<FormIncidence />} />
        <Route path='/Home/FormIncidence/Resume' element={<ResumeView />} />
      </Routes>
    </Router>
  );
}

export default App;
