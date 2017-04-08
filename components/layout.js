import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NProgress from 'nprogress';
import Router from 'next/router';

import baseTheme from '../styles/theme';
import Navigation from './header';

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
    muiTheme: PropTypes.object.isRequired
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
        <Navigation></Navigation>

        { this.props.children }

        <footer>
          footer
        </footer>
      </div>
    );
  }
}
