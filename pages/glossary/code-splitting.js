import Link from 'next/link'
import Head from 'next/head'

export default function GlossaryNew() {
  return (
    <>
    <Head>
      <title>Code Splitting - Javascript Glossary</title>
    </Head>
      <h1>Code Splitting</h1>
      <h2>A means to an end</h2>
      <h3>
        <Link href="/">
          <a>Go Back Home</a>
        </Link>
      </h3>
      <p>Code splitting is when each page only loads what's necessary for that page.</p>
      <p>What are the benefits of code splitting? In one work: performance. JS is bloated. Code splitting trims down the payload of each page. This makes web pages render faster which improves the user experience.</p>
    </>
  )
}
