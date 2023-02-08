import React from 'react'
import { useState } from 'react'
import './navbar.css'

function Navbar({open, setOpen}) {

  const [img, toggleImg] = useState('./images/icon-hamburger.svg')

  const toggle = () => {
    if(img == '/images/icon-hamburger.svg') {
      toggleImg('./images/icon-close.svg')
      setOpen(true)
    }
    else {
      toggleImg('./images/icon-hamburger.svg')
      setOpen(false)
    }
  }

  return (
    <header>
        <div className="header-box">
          <h2><img src="./images/logo.svg" alt="" /></h2>
          <div className="menu-btn" onClick={toggle}>
            <img src={img} alt='' />
          </div>
          <nav className={open ? 'opened': ''} >
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
              </ul>
          </nav>
          <div className="request-invite">
              <button>Request Invite</button>
          </div>
        </div>
    </header>
  )
}

export default Navbar