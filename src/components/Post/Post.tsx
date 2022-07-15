import { Commnet } from "../Comment/Comment"
import { Avatar } from "../Avatar/Avatar"
import styles from "./post.module.css"
interface Post {
    author: String
    content: String
}


export function Post () {
    return (
    <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHyh2e17o76cw/profile-displayphoto-shrink_200_200/0/1641837068071?e=1663200000&v=beta&t=sZ8QDkDVyKdQLox5aQYKXy7Juu5QyWvMCgnfCEGqM88"
                    />
                    <div className={styles.authorInfo}>
                        <strong> Erison Pimentão </strong>
                        <span> Software Engineer </span>
                    </div>
                </div>
                <time title="12 de julho às 15:38h" dateTime="2022/07/12 15:38:03" >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>fala galeraa</p>
                <p>acabei de subir mais um projeto no meu portifolio</p>
                <p> confere lá! <a href="#">Projeto Link</a></p>
                <p><a href="#">#reactjs</a><a href="#">#rocketseat</a><a href="#">#frontend</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea 
                    placeholder="Deixe seu comentário!"
                />
                
                <footer>
                    <button type="submit">Comentar!</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Commnet/>
                <Commnet/>
                <Commnet/>
            </div>
        </article>

    </>
    )
}