import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'
import { Posts } from './ssg'

const Ssr: NextPage = ({ posts }) => {
    return <main className={styles.main}>
        <Nav />
        <h1>SSR </h1>
        <h1> Server Site Rendering </h1>
        <p>
            🚀 This is not same as SSG because it has call to the server each time that is needed
            so could see the data updated each time 🚀
        </p>
        <hr />
        <Posts posts={posts} />
        <hr />

    </main>
}

export async function getServerSideProps() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            posts: data,
        },
    }
}

export default Ssr;