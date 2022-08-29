import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css'

function App() {


  return (
    <>
    <Header />
    <div className={styles.wrapper} >
      <Sidebar />
      <main>
        <div>testeste</div>
        <div>testeste</div>
      </main>
    </div>
    </>
  )
}

export default App
