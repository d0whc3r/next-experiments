import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Navigation from './header';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
  constructor(props) {
    super(props);
    const { title = 'This is the default title', style = null } = props;
    this.state = { title };
    if (style) {
      this.state.style = style;
      console.log('set style', style);
    }
  }

  render() {
    return (
      <Container fluid>
        <Head>
          { this.state.title && <title>{this.state.title}</title> }
        </Head>
        <Navigation></Navigation>

        <Container id="root" style={this.state.style} fluid>
          { this.props.children }
        </Container>

        <Container id="footer" fluid>
          footer
        </Container>
      </Container>
    );
  }
}

export const LayoutRedux = connect(state => state)(Layout);
export default Layout;
