import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'

const Csr: NextPage = () => {
    return <main className={styles.main}>
        <Nav />
        <h1> Client Site Rendering </h1>
    </main>
}

export default Csr;