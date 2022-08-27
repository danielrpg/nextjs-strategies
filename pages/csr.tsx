import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'
import { Posts } from './ssg'

const Csr: NextPage = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return <main className={styles.main}>
        <Nav />
        <h1> Client Site Rendering </h1>
        <p>
            🚀 This tecnique is going to render first, then ui components are going to be rendered, and after that
            ajax call is going to be executed 🚀
        </p>
        <hr />
        <Posts posts={posts} />
        <hr />
    </main>
}

export default Csr;