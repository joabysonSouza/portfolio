import { useEffect, useState } from 'react';
import Card from '../../components/Cards'
import styles from './Projetos.module.css';


function Projetos() {
  const [reposirories, setreposirories ] = useState([])

  useEffect(()=>{
    const buscarRepositorios = async ()=>{
      const response = await fetch('https://api.github.com/users/joabysonSouza/repos?page1&per_page=50')

      const data = await response.json()
      setreposirories(data)
    }
    buscarRepositorios()


  },[])




  return (
  <section className={styles.projetos}>
    
      <h2> Projetos</h2>
      {

        reposirories.length > 0 ? (
         <section className={styles.lista}>

         {

          reposirories.map((rep) =>(
            <Card 
            key={rep.id} 
            name={rep.name} 
            description={rep.description} 
            html_url={rep.html_url}
            />

          ))

         }
        </section>
    
        ) : (
          <p>carregando repositorios...</p>
        )

      }
    </section>
  )
}

export default Projetos
