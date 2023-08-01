import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
export function Comment(){
  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/31410425?v=4"/>
     <div className={styles.commentBox}>
       <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raissa Macedo</strong>
              <time title="30 de Julho ás 20h45" dateTime="2023-07-30 20:40:30">Cerca de uma 1h atrás.</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom dev Raissa, parabéns</p>
       </div>
       <footer>
         <button>
           <ThumbsUp />
           Aplaudir <span>20</span>
         </button>
       </footer>
     </div>
    </div>
  )
}