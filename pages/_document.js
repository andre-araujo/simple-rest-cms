import Document, { Head, Main, NextScript } from 'next/document';
import Loading from '../components/elements/Loading'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="pt-BR">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/styles/font-awesome.min.css" />
                    <link rel="stylesheet" href="/static/styles/tachyons.min.css" />
                    <link rel="stylesheet" href="/static/styles/reset.css" />
                    <link rel="stylesheet" href="/static/styles/global.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Loading />
                </body>
            </html>
        );
    }
}
