import Document, { Head, Main, NextScript } from 'next/document';

import generic from '../styles/generic.scss';
import loadingbar from '../styles/nprogress.scss';
import semantic from '../semantic/dist/semantic.min.css';

export default class extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    // const props = await Document.getInitialProps(ctx);
    const userAgent = ctx.req.headers['user-agent'] || 'all';
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: [generic, loadingbar, semantic] }}/>
    );
    return {
      page,
      styles,
      userAgent
    };
  }

  render() {
    return (
      <html>
      <Head>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        {this.props.styles}
      </Head>
      <body>

      <Main/>

      <NextScript />

      </body>
      </html>
    )
  }
}
