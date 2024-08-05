import { useState } from 'react'

import styles from './styles.module.css'

import { ThumbsUp, Trash } from '@phosphor-icons/react'

import { Avatar } from '../Avatar'

interface Props {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: Props) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/samuelfsd.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Samuel</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
