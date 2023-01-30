import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  const [Theme, setTheme] = useState('light-theme')
  function theme(){
    if(Theme == 'light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  };
  useEffect(() => {
    document.body.className = Theme
  },[Theme]);
  return (
<> <center>
<div className="container">
<span onClick={() =>theme()}><i class="fa-solid fa-circle-half-stroke"></i> <h4>Set Theme</h4></span>
    <h1>Watch Live Cricket <br/>
   All Indian cricket Team
    </h1> 
    <div className="main">
        <div className="content">
<h1>
WATCH LIVE CRICKET</h1>
<p>Click on the link below for watching live cricket streaming online for free.</p>
<NavLink to='watch'><button>Watch Free</button></NavLink>
</div>
    </div>
</div>
</center>
</>
  )
}

export default Home