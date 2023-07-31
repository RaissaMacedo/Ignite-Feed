import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

 import './global.css'
import styles from './App.module.css'
export function App() {
  return (
   <div>
     <Header />
    <div className={styles.wrapper}>
     <Sidebar />
      <main>
      <Post 
      author="Raissa Macedo" 
      content="Rafa, te amo meu docinho de coco <3"
     />
      </main>
    </div>
   </div>
  
  )
}

