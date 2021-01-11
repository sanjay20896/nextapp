import styles from '../styles/Home.module.css'

function blog(props) {
    return (
        <>
            <img src={props.img} alt="" width="300" height="200" />
            <h1 className={styles.blogTitle}>{props.title}</h1>
            <p>{props.desc}</p>
        </>
    )
    
}

export default blog