import React from 'react';
import Head from 'next/head';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NProgress from 'nprogress';
import { Link } from 'next-url-prettifier';
// const nRouter = require('next/router');
import Router from 'next/router';

import { Router as ownRouter } from '../routes';
import baseTheme from '../styles/theme';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    const { title = 'This is the default title', style = null } = props;
    this.state = { title };
    if (style) {
      this.state.style = style;
    }
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
          { this.state.title && <title>{this.state.title}</title> }
          { this.state.style && <style dangerouslySetInnerHTML={{ __html: this.state.style }}/> }
        </Head>

        <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link route={ownRouter.linkPage('index')}><a>index2</a></Link> |
          <Link route={ownRouter.linkPage('about')}><a>About</a></Link> |
          <Link route={ownRouter.linkPage('a2')}><a>About 2</a></Link>
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
