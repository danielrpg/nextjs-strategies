import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'

const Ssg: NextPage = ({ posts }) => {
    return <main className={styles.main}>
        <Nav />
        <h1>SSG </h1>
        <h1> Static Site Generation </h1>
        <p>
            🚀  This helps us to generate a static site with the information that is comming thru
            the props object, which was previously loaded by getStaticProps() method, just the first time
            that build is generated. Then we don't  need to generate another request
            next time that the build is generated.🚀
        </p>
        <hr />
        <section>
            {posts.map(post => <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>)}
        </section>
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
    }
}

export default Ssg;