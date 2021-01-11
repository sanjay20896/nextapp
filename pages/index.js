import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Blog from '../components/blog'
import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

//sanity api client
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '9muhrmr0',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(sanityClient);

const imgUrl = (source) => {
  return builder.image(source);
}


export async function getServerSideProps(context) {
  const query = `*[_type == "post"]{author->{name},title,desc,"mainImageUrl":mainImage.asset->url,_id}`
  let posts = await client.fetch(query);

  return {
    props: {posts}, // will be passed to the page component as props
  }
}

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

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
      </Head>

   


      <h1>Simple Blog App</h1>
      <br></br>
      <div className="row container">
        {props.posts.map(post => {
          return (
            <div className="col-lg-4" key={post._id}>
              <Blog
                title={post.title}
                desc={post.desc}
                img={post.mainImageUrl}
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