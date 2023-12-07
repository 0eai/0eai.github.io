import './App.css';
import AdminHomePage from './pages/adminPages/homePage/HomePage';
import LogIn from './pages/adminPages/loginPage/LoginPage';
import HomePage from './pages/homePage/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/view' element={<HomePage />} />
      <Route path='/' element={<LogIn />} />
      <Route path='/admin' element={<AdminHomePage />} />


    </Routes>
      
    </BrowserRouter>
  )
}

export default App;
