import style from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <main className={style.main} >
        <h3>Hello from index.js</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non vero optio aliquid cumque dolorum reiciendis doloremque, eum sequi. Totam quidem ab corrupti optio dolore illum cum alias rerum aut!</p>
        <Link href='/about'>Go to about</Link>
      </main>   
    </div>
  )
}
