import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Contribute from './Components/Contribute';
import Favourites from './Components/Favourites';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children :[
      {
        path : "", element : <Home/>
      }, {
        path : "contribute", element : <Contribute/>
      }, 
      {
        path : "favourites", element : <Favourites/>
      },
      {
        path : "about", element : <About/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);