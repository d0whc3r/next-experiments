import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

import generic from '../styles/generic.scss';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: generic }}/>
    );
    return { ...page, styles }
  }

  render() {
    return (
      <html>
      <Head>
        <title>New page</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        {this.props.styles}
      </Head>
      <body>
      <header>
        <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link href='/about'><a>About</a></Link>
        </nav>
      </header>

      <Main />
      <footer>
        footer
      </footer>

      <NextScript />

      </body>
      </html>
    )
  }
}
