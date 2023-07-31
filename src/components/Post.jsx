import styles from './Post.module.css'
export function Post(){
  return(
   <article className={styles.post}>
     <header>
       <div className={styles.author}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/31410425?v=4"/>
        <div className={styles.authorInfor}>
          <strong>Raissa Macedo</strong>
          <span>Web Developer</span>
        </div>
      </div>
      <time title="30 de Julho ás 20h45" dateTime="2023-07-30 20:40:30">Publicado há 1h</time>
     </header>
     <div className={styles.content}>
        <p>Fala galeraa 👋</p> 
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">raissa.developer/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat </a></p>

     </div>
    
   </article>
  )
}