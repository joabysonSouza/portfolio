import React, { useState } from 'react'
import Styles from'./Header.module.css'
import { Link } from 'react-router-dom'
import {GrMenu} from 'react-icons/gr'


function Header() {

  const[showMenu, setShowMenu] = useState(false)
  
  const toggleMenu = () =>{
    setShowMenu(!showMenu)

  }

  return (
    <>
    <header className={Styles.header}>
       <Link to="/">
        <span>Joabyson.dev</span>
        </Link>
        <nav>
         <div onClick={showMenu} className={`${Styles.Menu} ${showMenu ? Styles.menuIcon  : ""}` }
         >
          
            <Link to='/'>Home</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Projetos'>Projetos</Link>
            <Link to='/Contatos'>Contatos</Link>   
             </div> 
            
        </nav>
    
        <GrMenu className={Styles.menuIcon}
        onClick={toggleMenu}
        />
    </header>
    <div>
        
        
    </div>
    </>
  )
}

export default Header
