import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Container } from 'semantic-ui-react';

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

  render() {
    return (
      <Container fluid>
        <Head>
          { this.state.title && <title>{this.state.title}</title> }
          { this.state.style && <style dangerouslySetInnerHTML={{ __html: this.state.style }}/> }
        </Head>
        <Navigation></Navigation>

        <div id="root">
          { this.props.children }
        </div>

        <div id="footer">
          footer
        </div>
      </Container>
    );
  }
}
