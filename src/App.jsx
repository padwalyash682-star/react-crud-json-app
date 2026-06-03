import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import ViewStudent from './components/ViewStudent';
import DeleteStudent from './components/DeleteStudent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Login from './components/Login';

function App() {
   const [editStudent, setEditStudent] = useState(null);

  return (

    <BrowserRouter>
      <Routes>
         <Route
         path="/" 
         element={<Login />} 
         />
        <Route 
        path="/view"
         element={<ViewStudent />} 
         />

        <Route 
        path="/add"
         element={<AddStudent />} 
         />
        <Route path="/update/:id" 
        element={<UpdateStudent />}
         />
        <Route
         path="/delete/:id" 
        element={<DeleteStudent />} 
        />
        <Route
         path="/dashboard" 
         element={<DashBoard />} 
         />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
