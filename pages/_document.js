import Document, { Head, Main, NextScript } from 'next/document';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import generic from '../styles/generic.scss';
import loadingbar from '../styles/nprogress.scss';

export default class extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    // const props = await Document.getInitialProps(ctx);
    const userAgent = ctx.req.headers['user-agent'] || 'all';
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: [generic, loadingbar] }}/>
    );
    return {
      page,
      styles,
      userAgent
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}>
        <html>
        <Head>
          <title>New page</title>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
          {this.props.styles}
        </Head>
        <body>

        <Main/>

        <NextScript />

        </body>
        </html>
      </MuiThemeProvider>
    )
  }
}
