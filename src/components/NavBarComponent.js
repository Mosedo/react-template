import React from 'react'
import bootstrap from '../assets/bootstrap.svg'
import ux from '../assets/ux.png'
import search from '../assets/search.svg'
import arrow_right from '../assets/arrow-right-short.svg'
import '../styles/nav.css'

function NavBarComponent() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className='container'>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mycollapser" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
              </button>          
              <div className="collapse navbar-collapse" id="mycollapser">


                 <div className='d-flex navbar-nav me-auto justify-content-between align-items-center'>
                    <img src={bootstrap} alt="icon" height="35" width="35"/>
                    <h4 className='mt-1 mx-2'>Bootstrap</h4>
                    <img src={ux} alt="icon" height="25" width="25"/>
                 </div>


                  <ul className="navbar-nav mx-auto">
                      <li className="nav-item active mx-3">
                          <a className="nav-link" aria-current="page" href="/#">Components</a>
                      </li>
                      <li className="nav-item mx-3">
                          <a className="nav-link" aria-current="page" href="/#">Templates <span className='with-span text-white px-2 py-1 rounded'>New</span></a>
                      </li>
                      <li className="nav-item mx-3">
                          <a className="nav-link" aria-current="page" href="/#">Documentation</a>
                      </li>
                      <li className="nav-item mx-3">
                          <a className="nav-link" aria-current="page" href="/#"><img src={search} alt="icon" height="25" width="25"/></a>
                      </li>

                      <li className="nav-item mx-2">
                          <a className="nav-link text-secondary" aria-current="page" href="/#"> | </a>
                      </li>

                      <li className="nav-item mx-2">
                          <a className="nav-link" aria-current="page" href="/#">Sign in</a>
                      </li>

                      <li className="nav-item mx-2">
                          <a className="text-white nav-link btn btn-dark" aria-current="page" href="/#">Get all-access<span><img src={arrow_right} alt="icon" height="18" width="18"/></span></a>
                      </li>
                  </ul>
          
              </div>
            </div>
          </nav>
        </>
      )
}

export default NavBarComponent