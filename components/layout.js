import React from 'react';
import Head from 'next/head';
import baseTheme from '../styles/theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class extends React.Component {

  static getInitialProps({ children, title = 'This is the default title', stylesheet = [] }) {
    const style = stylesheet ? (
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
    ) : '';
    return { children, title, style };
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme())
    };
  }

  getTitle() {
    if(this.props.title) {
      return (<title>{this.props.title}</title>);
    } else {
      return ('');
    }
  }

  render() {
    return (
      <div>
        <Head>
          { this.getTitle() }
          { this.props.style }
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
