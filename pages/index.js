import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Comunidade Venda Estratégica</title>
        <meta name="description" content="Plataforma de comunidade gamificada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Comunidade Venda Estratégica</h1>
        <p>Bem-vindo à plataforma de comunidade gamificada!</p>
      </main>
    </div>
  )
}
