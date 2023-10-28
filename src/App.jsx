
// import './App.css'
// import {
//   BrowserRouter as Router,
//   Route, Routes
// } from 'react-router-dom';
// import Home from './Home.jsx';
// import Login from './Login';
// import Breadcrumbs from "./components/Breadcrumbs";
// import FormHandler from './components/FormHandler';


// function App() {
//   console.log('App is rendering');
//   return (
//     <Router>
//       <Breadcrumbs />
//       <Routes>
//         <Route path='/' element={<Login />} index />
//         <Route path="Home/*" element={<Home />}>
//           <Route path="*" element={<FormHandler />} />
//         </Route>
//       </Routes>
//     </Router>
//     //   <Router>
//     //     <Breadcrumbs />
//     //     <Routes>
//     //       <Route exact path='/' element={<Login />} />
//     //       <Route exact path="/Home" element={<Home />} />
//     //       <Route exact path="/Resume" element={<ResumeView />} />
//     //     </Routes>
//     //   </Router>
//   );
// }
// App.jsx
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login';
import Breadcrumbs from "./components/Breadcrumbs";
import FormRequest from './FormViewRequest';
import FormIncidence from './FormViewIncidence';
import ResumeView from './Resume';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Breadcrumbs />
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
