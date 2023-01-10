import styles from './Post.module.css';
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, publishedAt }) {
  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  return (
    <article  className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div  className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>

          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()} >{publishedDateFormated}</time>
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