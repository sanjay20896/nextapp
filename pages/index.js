import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Blog from '../components/blog'

var posts = [
  {
    id:1,
    title: "dfdfd",
    desc: "dfdf",
  },
  {
    id:2,
    title: "fdfd",
    desc: "dfdfdff",
  },
  {
    id:3,
    title: "dfdffdfd",
    desc: "dfddfddsf",
  },
  {
    id:3,
    title: "dfdffdfd",
    desc: "dfddfddsf",
  }
]

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
        
      </Head>

   


      <h1>Simpl Blog App</h1>
      
      <div className="row container">
        {posts.map(post => {
          return (
            <div className="col-lg-4" key={post.id}>
              <Blog
                title={post.title}
                desc={post.desc}
                img="https://picsum.photos/200/300"
              />
            </div>
          )
        })}
      </div>
     
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
