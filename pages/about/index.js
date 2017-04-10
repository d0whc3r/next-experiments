import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';

import { LayoutRedux } from '../../components/layout';
import Cat from '../../images/cat.svg';
import { configure } from '../../store';
import redux, { sample } from './redux';


class About extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(sample());
    return { isServer }
  }

  render() {
    console.log('render', arguments);
    return (
      <LayoutRedux>
        <Cat/>
        About us
        <Link href="./a2">asdf</Link>
      </LayoutRedux>
    )
  }
}

export default withRedux(configure)(About);
