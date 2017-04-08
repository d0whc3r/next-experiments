import React from 'react';
import Head from 'next/head';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NProgress from 'nprogress';
import { Link } from 'next-url-prettifier';
const nRouter = require('next/router');
// import Router from 'next/router';

import { Router } from '../routes';
import baseTheme from '../styles/theme';

nRouter.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
nRouter.onRouteChangeComplete = () => NProgress.done();
nRouter.onRouteChangeError = () => NProgress.done();

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    const { title = 'This is the default title', style = [] } = props;
    this.info = { title, style };
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme())
    };
  }

  render() {
    return (
      <div>
        <Head>
          { this.info.title && <title>{this.info.title}</title> }
          { this.info.style && <style dangerouslySetInnerHTML={{ __html: this.info.style }}/> }
        </Head>

        <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link route={Router.linkPage('index')}><a>index2</a></Link> |
          <Link route={Router.linkPage('about')}><a>About</a></Link> |
          <Link route={Router.linkPage('a2')}><a>About 2</a></Link>
          <Link href='./a2'><a>About</a></Link>
        </nav>

        { this.props.children }

        <footer>
          footer
        </footer>
      </div>
    );
  }
}
