import React from 'react';
import { Link } from 'next-url-prettifier';

import { Router } from '../../routes';
import Layout from '../../components/layout';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'About new title';
  }

  static getInitialProps({ query: { lang, name } }) {
    return { lang, name }
  }

  renderSwitchLangageLink() {
    const { lang, name } = this.props;
    const switchLang = lang === 'fr' ? 'en' : 'fr';
    return (
      <Link route={Router.linkPage('about', { name, lang: switchLang })}>
        <a>{switchLang === 'fr' ? 'Français' : 'English'}</a>
      </Link>
    )
  }

  render() {
    return (
      <Layout title={this.title}>
        <div>{this.renderSwitchLangageLink()}</div>
        About us2
      </Layout>
    );
  }
}
