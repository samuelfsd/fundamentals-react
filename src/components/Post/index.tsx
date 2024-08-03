import { useState } from 'react'

import styles from './styles.module.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

interface Author {
  avatarUrl: string
  name: string
  role: string
}

interface Content {
  type: string
  content: string
}

interface Props {
  author: Author
  content: Content[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: Props) {
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState(['Post dahora!'])

  function handleSubmit() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(comment: string) {
    const filteredComments = comments.filter((item) => {
      return item !== comment
    })

    setComments(filteredComments)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time>{publishedAt.toString()}</time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }
          return (
            <p key={line.content}>
              <a href="">{line.content}</a>
            </p>
          )
        })}
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        {/* @TODO ajustar o erro do onInvalid */}
        <textarea
          placeholder="deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid="preencha esse campo por favor"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
