import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

 import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/raissaUtf.png',
      name: 'Raissa Macedo',
      role: 'Full developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'raissa.developer/doctorcare'},
    ],
    publisheAt: new Date('2023-08-08'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/raissaMacedo.png',
      name: 'Rafaela Macedo',
      role: 'Full developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'raissa.developer/doctorcare'},
    ],
    publisheAt: new Date('2023-08-08'),
  },
]
export function App() {
  return (
   <div>
     <Header />
    <div className={styles.wrapper}>
     <Sidebar />
      <main>
       {posts.map(post => {
         return (
            <Post
              author={post.author}
              content={post.content}
              publisheAt={post.publisheAt}
            />
         )
       })}
      </main>
    </div>
   </div>
  
  )
}

