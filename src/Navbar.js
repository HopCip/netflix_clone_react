import React from 'react'
import './Navbar.css'
import logo from './images/netflix.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import links from './menudata'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <div className="navigation">
        <div className="nav_header">
          <img src={logo} alt="logo"></img>
          <button onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu className="hamburger_icon" />
          </button>
        </div>
        <div className={`${showMenu ? 'nav_list show' : 'nav_list hide'}`}>
          <ul>
            {links.map((oneLink) => {
              const { id, text, url } = oneLink
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
