import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './comment.module.css'

export function Commnet() {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src='https://media-exp1.licdn.com/dms/image/C4D03AQHyh2e17o76cw/profile-displayphoto-shrink_200_200/0/1641837068071?e=1663200000&v=beta&t=sZ8QDkDVyKdQLox5aQYKXy7Juu5QyWvMCgnfCEGqM88'
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div>
                            <strong>Erison Pimentão</strong>
                            <time title="12 de julho às 15:38h" dateTime="2022/07/12 15:38:03" >Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'><Trash size={24}></Trash></button>
                    </header>

                    <p> Muito Bom Erison, Parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>28</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}  