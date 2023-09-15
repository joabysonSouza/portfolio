import React from 'react'
// import Header from '../../components/Header'
// import Container from '../../components/Container'
// import Footer from '../../components/Footer'
import Styles from './Contatos.module.css'
 import {MdEmail} from 'react-icons/md' //usei uma biblioteca chamada react-ico
import {BsGithub} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {AiFillLinkedin} from 'react-icons/ai'


function Contatos() {
  return (
    <>

      <section className={Styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversa mais sobre.</p>

      <div className={Styles.ico}>
        <a href='mailto:joabyson916@gmail.com'
         target='_blank' rel='noopener noreferrer'> <MdEmail className={Styles.icon}/>
       </a>
        <a href="https://github.com/joabysonSouza" target="_blank" rel="noopener noreferrer">
        <BsGithub className={Styles.icon}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=75982318123" target="_blank" rel="noopener noreferrer">
        <RiWhatsappFill className={Styles.icon}/>
        </a>


        <a href="https://www.linkedin.com/in/joabysonSouza"
        target='_blank'  rel="noopener noreferrer">
        <AiFillLinkedin className={Styles.icon}/>
        </a>

      </div>
      </section>

    </>
  )
}

export default Contatos
