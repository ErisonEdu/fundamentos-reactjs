import styles from './sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80'
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src='https://media-exp1.licdn.com/dms/image/C4D03AQHyh2e17o76cw/profile-displayphoto-shrink_200_200/0/1641837068071?e=1663200000&v=beta&t=sZ8QDkDVyKdQLox5aQYKXy7Juu5QyWvMCgnfCEGqM88'/>
                <strong>Erison Pimentão</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}