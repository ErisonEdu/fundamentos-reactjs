import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar} from './components/Sidebar/Sidebar'

import './global.css'

import styles from './app.module.css'

function App() {
 return(
  <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post/>
        <Post/>
        <Post/>
      </main>
    </div>
  </>
 )
}

export default App
