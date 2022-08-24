import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menus from './components/Menus';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <div className='container'>
        <Header/>
        <div className='row'>
           <div className='col-4'>
              <Menus/>
           </div>
           <div className='col-8'>
           <Routes>
            
                 <Route index element={<Home/>} />
                 <Route path='home' element={<Home/>}  />
                 <Route path='addCourse' element={<AddCourse/>}  />
                 <Route path='viewCourse' element={<ViewCourse/>}  />
            
          </Routes>
           </div>
          
        </div>
      </div>
      </Router>
     
    </div>
  );
}

export default App;
