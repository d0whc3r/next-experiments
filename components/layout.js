import React from 'react';
import Head from 'next/head';
import baseTheme from '../styles/theme';
import getMuiTheme from "material-ui/styles/getMuiTheme";

export default class extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    onTouchTap: React.PropTypes.func,
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme())
    };
  }

  static getInitialProps({ children, title = 'This is the default title', stylesheet = '' }) {
    const style = stylesheet ? (
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
    ) : '';
    return { children, title, style };
  }

  render() {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          { this.props.style }
        </Head>
        { this.props.children }
      </div>
    );
  }
}
