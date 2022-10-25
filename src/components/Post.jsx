import styles from './Post.module.css';
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
  return (
    <article  className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/brl4528.png"/>
          <div  className={styles.authorInfo}>
            <strong>Bruno Luiz</strong>
            <span>Web Developer</span>

          </div>
        </div>

        <time title='11 de Maio ás 08:13h' dateTime="2022-05-11 08:13:30" >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifa. è um projeto que fiz na nlw return, evento da Rocketseat</p>
        <p><a href=''>Jane.design/doxtorcares</a></p>
        <p> 
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
      </form>

      <div className={styles.commentList}>
       <Comment />
      </div>
    </article>
  )
}