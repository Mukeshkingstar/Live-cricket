 import React from 'react'
 import Home from './Home'
 import Watch from './Watch'
 import {Routes,Route} from 'react-router-dom'
 const App = () => {
   return (
     <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>
      <Route path='*' element={<h1>Error 404</h1>}/>
     </Routes>
     </>
   )
 }
 
 export default App