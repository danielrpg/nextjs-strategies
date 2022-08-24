import Link from 'next/link'

export const Nav = () => <nav>
    <Link href='/'>🏠</Link>
    <Link href='/ssg'>SSG</Link>
    <Link href='/ssr'>SSR</Link>
    <Link href='/csr'>CSR</Link>
    <Link href='/isr'>ISR</Link>
</nav>