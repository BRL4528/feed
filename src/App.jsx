import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

import styles from './App.module.css';
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brl4528.png',
      name: 'Bruno Luiz',
      role: 'CTO @ MidasCoporate'
    },
    content: [
      { type: 'paragraph', content: 'ooouu Fala galeraa 🖐️',  },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. è um projeto que fiz na nlw return, evento da Rocketseat',  },
      { type: 'link', content: 'jane.design/doctorcare',  }
    ],
    publishedAt: new Date('2023-01-06 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/alessandro-silva.png',
      name: 'Alessandro silva',
      role: 'CTO @ MidasCoporate'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 🖐️',  },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. è um projeto que fiz na nlw return, evento da Rocketseat',  },
      { type: 'link', content: 'jane.design/doctorcare',  }
    ],
    publishedAt: new Date('2023-01-06 20:00:00')
  }
]


function App() {


  return (
    <>
    <Header />
    <div className={styles.wrapper} >
      <Sidebar />
      <main>
        {posts.map(post =>   (
           <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
          )
        )}
      </main>
    </div>
    </>
  )
}

export default App
