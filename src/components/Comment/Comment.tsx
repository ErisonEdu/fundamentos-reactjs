import styles from './comment.module.css'

export function Commnet () {
    return(
        <div className={styles.comment}>
            <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHyh2e17o76cw/profile-displayphoto-shrink_200_200/0/1641837068071?e=1663200000&v=beta&t=sZ8QDkDVyKdQLox5aQYKXy7Juu5QyWvMCgnfCEGqM88' alt="erison-avatar" />

            <div className={styles.commentBox}>
                <header>
                    <div className={styles.commentContent}>
                        <strong>Erison Pimentão</strong>
                        <time title="12 de julho às 15:38h" dateTime="2022/07/12 15:38:03" >Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar Comentário'></button>
                </header>

                <p> Muito Bom Erison, Parabéns!!</p>
            </div>
        </div>
    )
}