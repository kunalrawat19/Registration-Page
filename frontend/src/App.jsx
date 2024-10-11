import './App.css'
import { Routes, Route } from 'react-router'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path = '/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
