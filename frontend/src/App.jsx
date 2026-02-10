import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Form from './Form'
import Users from './getAll'
import Update from './assets/update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Form/>}></Route>
         <Route path="/users" element={<Users/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
     </Routes>
    </>
  )
}

export default App
