import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'
import { Posts } from './ssg'

const Isr: NextPage = ({ posts }) => {
    return <main className={styles.main}>
        <Nav />
        <h1> Incremental Site Rendering </h1>
        <p>
            🚀 This technique is going to work incrementally and each time is going to rerender the data againg,
            the time for the triggering is taken from the revalidate values in the getStaticProps method 🚀
        </p>
        <hr />
        <Posts posts={posts} />
        <hr />
    </main>
}

export async function getStaticProps() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            posts: data,
        },
        revalidate: 120 // 2 minutes
    }
}

export default Isr;