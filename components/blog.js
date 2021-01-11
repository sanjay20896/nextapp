import styles from '../styles/Home.module.css'
import { imgUrl } from '../functions'
function blog(props) {
    console.log('blog images');
    console.log(props);
    return (
        <>
            <img src={props.img} alt="main image" width="300" height="200" />
            <h1 className={styles.blogTitle}>{props.title}</h1>
            <p>{props.desc}</p>
        </>
    )
    
}

export default blog