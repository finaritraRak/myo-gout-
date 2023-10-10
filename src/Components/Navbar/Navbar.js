import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
   
    <Link className="navbar-brand" to="/">Moments You Own</Link>  
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
   </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
            
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/cafe">nos café</Link>
          </li>
        
    </ul>

    </div> 
</nav>

  )
}
