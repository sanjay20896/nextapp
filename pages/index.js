import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Blog from '../components/blog'
import React from 'react'
import Paginate from '../components/pagination';
import imageUrlBuilder from '@sanity/image-url'
import {ITEMS_PER_PAGE} from '../config' 
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
  
  const query = `*[_type == "post"]{author->{name},title,desc,"mainImageUrl":mainImage.asset->url,_id,slug}`
  let posts = (await client.fetch(query));
  let totalPosts = posts.length;
  let totalPages = Math.ceil(totalPosts/ITEMS_PER_PAGE)
  let pageNo = 1;
  if (!isNaN(parseInt(context.query.page)) && parseInt(context.query.page) >= 1 && parseInt(context.query.page) <= totalPages) {
    pageNo = parseInt(context.query.page)
  }
  posts = posts.splice(((pageNo - 1) * ITEMS_PER_PAGE), pageNo * 2);
  //console.log(posts.length);
  console.log(posts);
  return {
    props: {posts,totalPages,pageNo}, // will be passed to the page component as props
  }
}

export default function Home(props) {
  console.log(props);
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
                img={ post.mainImageUrl }
                slug={post.slug}
              />
             

            </div>
          )
        })}
      </div>
      <Paginate
        pageNo={ props.pageNo }
        totalPages={ props.totalPages }
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