import React from 'react'
import Styles from './Home.module.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

      <section className={Styles.home}>
        <div className= {Styles.aprensentacao}>
          <p>Olá, sou <br/>
          <span>Joabyson Souza</span> <br />
          Sou dev Front-end
          </p>
            <Link to="/Sobre" className={Styles.btn}>
              Saiba mais sobre mim
            </Link>
       </div>
     <figure>
      
       <img className={Styles.imgHome} src="/Perfil.jpg" alt="desenvolvedor"  />
     </figure>
      </section>
     </>
  )
}

export default Home
