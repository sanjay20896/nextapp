import Head from 'next/head'
import styles from '../../styles/Home.module.css'
//import Blog from '../../components/blog'
import SingleBlog from '../../components/singleBlog'
import React from 'react'
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '9muhrmr0',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})

export async function getServerSideProps(context) {
  const query = `*[_type == "post" && slug.current=="${context.query.slug}"]{title,desc,"mainImageUrl":mainImage.asset->url,_id,slug}`
    let post = (await client.fetch(query))[0];
    
    console.log('slug page')
    console.log(post);
  return {
    props: {post}, // will be passed to the page component as props
  }
}


export default function Home(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>{ props.post.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
      </Head>

   


      <h1>Simple Blog App</h1>
      <br></br>
      <SingleBlog
                title={props.post.title}
                desc={props.post.desc}
                img={ props.post.mainImageUrl }
      />
     
      

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