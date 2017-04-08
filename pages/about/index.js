import React from 'react';
// import Link from 'next/link';
import { Link } from 'next-url-prettifier';

import { Router } from '../../routes';
import Layout from '../../components/layout';
import Cat from '../../images/cat.svg';

export default class extends React.Component {
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
      <Layout>
        <Cat/>
        About us
        <Link route={Router.linkPage('a2')}><a>aa</a></Link>
        <a href="./a2">asdf</a>
        <div>{this.renderSwitchLangageLink()}</div>
      </Layout>
    )
  }
}
