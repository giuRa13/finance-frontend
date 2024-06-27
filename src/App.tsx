import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './Context/useAuth';

function App() {

  return (
    <>
    <div id='App'>
      <UserProvider>
      
        <Navbar/>
        
        <Outlet/>

        <ToastContainer theme="colored"/>
        
        <Footer/>
        
      </UserProvider>
    </div>
    </>
  );
}

export default App;
