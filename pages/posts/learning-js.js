import Link from 'next/link'
import Head from 'next/head'



export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Learning Javascript: Day One</title>
      </Head>
      <h1>Learning Javascript &amp; React</h1>
      <h2>A means to an end</h2>
      <h3>
        <Link href="/">
          <a>Go Back Home</a>
        </Link>
      </h3>
      <p>Hey friend, my name is Ken Prince—if you don't know much about me you should take a look at my bio.</p>
      <p>This is my programming blog where I write about learning Javascript. For me, learning JS is a means to an end.</p>
      <p>I'm not interested in getting a sweet job at Facebook, or working at that cool new startup Dispo. I just want to build shit.</p>
    </>
  )
}
