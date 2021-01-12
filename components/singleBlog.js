import styles from '../styles/Home.module.css'
import Link from 'next/link'
//import { imgUrl } from '../functions'

function singleBlog(props) {
    console.log('blog images');
    console.log(props);
    return (
        <>
            <div className="gridcontainer" >
                <img src={props.img} alt="main image" width="300" height="200" />
                <h1 className={styles.blogTitle}>{props.title}</h1>
                <p>{ props.desc }</p>  
            </div>
        </>
    )
}


export default singleBlog;