import styles from './App.module.css'

import './global.css'

import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts : PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/samuelfsd.png',
      name: 'Samuel Alves Medeiros',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'FALA GALERA' },
      {
        type: 'paragraph',
        content: 'Acabei de subir uma publicação na WEB...',
      },
      { type: 'link', content: 'samuelfsd.design/care' },
    ],
    publishedAt: new Date('2024-06-10 20:20:35'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'FALA GALERA' },
      {
        type: 'paragraph',
        content: 'Acabei de subir uma publicação na WEB...',
      },
      { type: 'link', content: 'samuelfsd.design/care' },
    ],
    publishedAt: new Date('2024-06-01 20:20:35'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Calvo',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'FALA GALERA' },
      {
        type: 'paragraph',
        content: 'Acabei de subir uma publicação na WEB...',
      },
      { type: 'link', content: 'samuelfsd.design/care' },
    ],
    publishedAt: new Date('2024-06-15 20:20:35'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
