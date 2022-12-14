import { useState, useCallback } from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, publishedAt, content }) {
 const [comments, setComment] = useState(['post meio bosta!'])

 const [newCommentText, setNewcommentText] = useState('')

  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  function handlesubmitComment() {
    event.preventDefault()
    setComment([...comments, newCommentText])
    setNewcommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewcommentText(event.target.value)
  }

  function hamdleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')

  }

  function deleteComment(comment) {
    const commentsfiltred = comments.filter((item) => {
      return item !== comment
    })

    setComment(commentsfiltred)
  }

  const isNewCommentEmpty = newCommentText.length === 0
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
        {
          content.map(line => {
            if(line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;

            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handlesubmitComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          onInvalid={hamdleNewCommentInvalid}
          required
          />

          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
          </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {

       return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}