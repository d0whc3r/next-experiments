import React from 'react';
import Head from 'next/head';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

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
          { this.info.title &&  <title>{this.info.title}</title> }
          { this.info.style && <style dangerouslySetInnerHTML={{ __html: this.info.style }}/> }
        </Head>

        <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link href='/about'><a>About</a></Link>
        </nav>

        { this.props.children }

        <footer>
          footer
        </footer>
      </div>
    );
  }
}
