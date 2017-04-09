import React from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';
import Cat from '../../images/cat.svg';

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Cat/>
        About us
        <Link href="./a2">asdf</Link>
      </Layout>
    )
  }
}
