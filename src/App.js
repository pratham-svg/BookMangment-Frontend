import './App.css';
import {BrowserRouter , Router , Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import BookDetails from './components/BookDetails/BookDetails';
import LogIn from './components/LogIn/LogIn';
import ReadBook from './components/BookDetails/ReadBook';
import UserState from './context/User/UserState';
import SignUp from './components/SignUp/SignUp';
import Footter from './components/Footter/Footter';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div >
      
       <BrowserRouter>
       <UserState>
     <Navbar/>
   <Routes>
   <Route path="/home" element={<HomePage />}/>
   <Route path="/About" element={<About />}/>
   <Route path="/Books" element={<BookDetails />}/>
   <Route path="/LogIn" element={<LogIn/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
   <Route path="/ReadBook" element={<ReadBook/>}/>
   <Route path='/Contact' element={<Contact/>} />
    <Route path="*" element={<div>Please enter a valid path</div>}/>
    </Routes>
    <Footter/>
    </UserState>
   </BrowserRouter>
    </div>
  );
}

export default App;
