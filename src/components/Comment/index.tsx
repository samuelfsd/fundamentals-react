import styles from './styles.module.css'

import { ThumbsUp, Trash } from '@phosphor-icons/react'

import { Avatar } from '../Avatar'

interface Props {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: Props) {
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
              onClick={() => onDeleteComment(content)}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
