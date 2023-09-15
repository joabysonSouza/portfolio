import React from "react";
import Styles from "./Sobre.module.css";
import Perfil from './Imagens/Perfil.jpg'
import html from './Imagens/Html-ico.svg'
import css from './Imagens/icon-css.svg'
import js from './Imagens/icon-js.svg'
import react from './Imagens/icon-react.svg'
import sql from './Imagens/icon-sql.svg'
import { BsGithub} from "react-icons/bs"
import {BsGit} from 'react-icons/bs' 

function Sobre() {
  return (
    <section >
       <div className={Styles.sobre}>
      <div className={Styles.bio}>
        <img src={Perfil} alt="perfil" className={Styles.perfil}  />
        
        <div className={Styles.text}>
        <h2>Sobre</h2>
          <p>
            Sou <span>Joabyson Souza</span> <br />
            <strong>Dev Front-End</strong>
          </p>
           <p>
             sou apaixonado por progamação
             e transformar ideias em realidade
           </p> 

           <p>Sou espezializado em criar apicações dinamicas
           e intuitivas com foco na experiência do usuário</p> 
           <p>Estudo análise e Desenvolvimento de Sistemas na Instituição Leonardo da Vinci Uniasselvi</p><br />
        </div>
        </div>
      
        <div className={Styles.techs}>
          <h3>Techs</h3>
          <figure className={Styles.icones}>
            <img src={html} alt="icone-html"  />
            <img src={css} alt="icone-css"  />
            <img src={js} alt="icone-js"  />
            <img src={react} alt="icone-react"  />
            <img src={sql} alt="icone-sql"  />
            <BsGithub size={50} className={Styles.bs_icon}/>
            <BsGit size={50} className={Styles.bs_icon}/>
          </figure>
        </div>  
      </div>
      </section>
    
  );
}

export default Sobre;
