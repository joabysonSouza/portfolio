import React from 'react'
// import Header from '../../components/Header'
// import Container from '../../components/Container'
// import Footer from '../../components/Footer'
import Styles from "./Page404.module.css"

function Page404() {
  return (
    <>
    
     
        <h2 className={Styles.titulo2}>Algo deu errado</h2>
        <div className={Styles.textos}>
            <span className={Styles.textoV}>404</span> <br />
            <strong className={Styles.textoG}>Pagina não encontrada</strong>
        </div>
      
    </>
  )
}

export default Page404
