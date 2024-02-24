import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet/>
      </div>
    </>
  );
}

export default App;
