import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x144.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"></link>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
