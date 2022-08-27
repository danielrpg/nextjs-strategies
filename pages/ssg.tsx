import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'

export const Posts = ({ posts }) => {
    return <section>
        {posts.map(post => <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>)}
    </section>
}

const Ssg: NextPage = ({ posts }) => {
    return <main className={styles.main}>
        <Nav />
        <h1>SSG </h1>
        <h1> Static Site Generation </h1>
        <p>
            🚀  This helps us to generate a static site with the information that is comming thru
            the props object, which was previously loaded by getStaticProps() method fetching data from external resource, just the first time
            that build is generated then the information keeps static. Then we donnot  need to generate another request
            next time that the build is generated, While you are seing static data generated.🚀
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
    }
}

export default Ssg;